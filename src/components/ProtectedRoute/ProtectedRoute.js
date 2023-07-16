import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

function ProtectedRoute({component: Component, path, ...rest}) {

    const isLogin = useSelector(state => state.isLogin.isLogin);

    return (<Route
        {...rest}
        render={props => isLogin ? (<Component {...props} />) : (<Redirect to="/signup"/>)}
    />);
}

export default ProtectedRoute;
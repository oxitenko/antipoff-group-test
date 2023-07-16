import "./BackButton.css"
import {useHistory} from "react-router-dom";
import useResize from "../../hooks/useResize";
import arrowLeft from "../../images/arrowLeft.svg"

const BackButton = () => {

    const history = useHistory();
    const windowSize = useResize();

    const goBack = () => {
        history.goBack()
    }

    return (<div className="back">
        {windowSize.width >= 860 ? <button onClick={goBack} type="button" className="back_button-l">Назад</button> :
            <button onClick={goBack} type="button" className="back_button-s"><img src={arrowLeft}
                                                                                  alt="back"/>
            </button>}
    </div>);
};

export default BackButton;
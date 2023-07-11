import "./Main.css"
import LogoutButton from "../LogoutButton/LogoutButton";
import {useSelector} from "react-redux";
import UserCard from "../UserCard/UserCard";

const Main = () => {

    const users = useSelector(state => state.users?.users);

    return (<>
            <div className="team">
                <LogoutButton/>
                <div className="team_container">
                    <h1 className="team_title">Наша команда</h1>
                    <p className="team_text">Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
                        ложатся на их плечи, и умеющие
                        находить выход из любых, даже самых сложных ситуаций.</p>
                </div>
            </div>
            <ul className="team_list">
                {users.map(user => <UserCard user={user} key={user.id}/>)}
            </ul>
        </>
    );
};

export default Main;
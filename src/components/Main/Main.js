import "./Main.css"
import LogoutButton from "../LogoutButton/LogoutButton";
import {useSelector} from "react-redux";
import UserCard from "../UserCard/UserCard";
import arrowDown from "../../images/arrowDown.svg"
import {useEffect, useState} from "react";
import useResize from "../../hooks/useResize";

const Main = () => {

    const [pagination, setPagination] = useState(0);
    const users = useSelector(state => state.users?.users);
    const windowSize = useResize();
    const loadMore = () => {
        setPagination(state => state + 4)
    }

    useEffect(() => {
        if (windowSize.width >= 860) {
            setPagination(8)
        } else {
            setPagination(4)
        }
    }, [windowSize.width]);

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
            {users.slice(0, pagination).map(user => <UserCard user={user} key={user.id}/>)}
        </ul>
        {pagination !== users.length ? <button
            onClick={loadMore}
            className="team_loadmore"
            type="button">Показать еще <img src={arrowDown} alt="arrow"/>
        </button> : null}

    </>);
};

export default Main;
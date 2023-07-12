import "./UserCard.css"
import like from "../../images/heartIcon.svg"
import {Link} from "react-router-dom";

const UserCard = ({user}) => {
    return (<li className="user-card">
        <Link style={{textDecoration: "none"}} to={`about-user/${user.id}`}>
            <div className="user-card_info">
                <img className="user-card_avatar" src={user.avatar} alt={user.first_name}/>
                <p className="user-card_name">{user.first_name} {user.last_name}</p>
            </div>
        </Link>
        <div className="user-card_likewrap">
            <button className="user-card_likebtn" type="button"><img src={like} alt="like"/></button>
        </div>
    </li>);
};

export default UserCard;
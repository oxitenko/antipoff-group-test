import "./UserCard.css"
import like from "../../images/heartIcon.svg"
const UserCard = ({user}) => {
    return (
        <li className="user-card">
            <div className="user-card_info">
                <img className="user-card_avatar" src={user.avatar} alt={user.first_name}/>
                <p className="user-card_name">{user.first_name} {user.last_name}</p>
            </div>
            <div className="user-card_likewrap">
                <button className="user-card_likebtn" type="button"><img src={like} alt="like"/></button>
            </div>
        </li>
    );
};

export default UserCard;
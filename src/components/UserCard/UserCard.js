import "./UserCard.css"
import like from "../../images/heartIcon.svg"
const UserCard = ({user}) => {
    return (
        <li className="user-card">
            <div>
                <img src={user.avatar} alt={user.first_name}/>
                <p>{user.first_name} {user.last_name}</p>
            </div>
            <div>
                <button><img src={like} alt="like"/></button>
            </div>
        </li>
    );
};

export default UserCard;
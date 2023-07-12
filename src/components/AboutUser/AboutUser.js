import "./AboutUser.css"
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";
import BackButton from "../BackButton/BackButton";
import phone from "../../images/phoneIcon.svg"
import mail from "../../images/mailIcon.svg"

const AboutUser = () => {

    const {id} = useParams();
    const users = useSelector(state => state.users?.users);
    const userInfo = users.filter((person) => person.id === Number(id));

    return (<>
        <div className="aboutuser-head">
            <div className="aboutuser-head_buttons">
                <BackButton/>
                <LogoutButton/>
            </div>
            <div className="aboutuser-head_info">
                <img className="aboutuser-head_avatar" src={userInfo[0]?.avatar} alt={userInfo[0]?.first_name}/>
                <div className="aboutuser-head_role">
                    <p className="aboutuser-head_name">{`${userInfo[0]?.first_name} ${userInfo[0]?.last_name}`}</p>
                    <p className="aboutuser-head_status">Партнер</p>
                </div>
            </div>
        </div>
        <div className="aboutuser-description">
            <div className="aboutuser-description_container">
                <p className="aboutuser-description_text">Клиенты видят в нем эксперта по вопросам разработки
                    комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура,
                    процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их
                    бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя
                    самые современные аналитические инструменты.</p>
                <p className="aboutuser-description_text">В работе с клиентами недостаточно просто решить конкретную
                    проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один
                    из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый
                    уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все
                    необходимое, чтобы дальше развиваться самостоятельно".</p>
                <p className="aboutuser-description_text">Помимо разнообразных проектов для клиентов финансового
                    сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник
                    эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором
                    других бизнес-проектов.</p>
            </div>
            <div className="aboutuser-description_contacts">
                <p className="aboutuser-description_contact"><img src={phone} alt="phone"/> +7 (954) 333-44-55</p>
                <p className="aboutuser-description_contact"><img src={mail} alt="mail"/> sykfafkar@gmail.com</p>
            </div>
        </div>
    </>);
};

export default AboutUser;
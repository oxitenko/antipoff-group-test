import "./BackButton.css"
import {useNavigate} from "react-router-dom";
import useResize from "../../hooks/useResize";
import arrowLeft from "../../images/arrowLeft.svg"

const BackButton = () => {

    const navigate = useNavigate()
    const windowSize = useResize();

    return (<div className="back">
        {windowSize.width >= 860 ?
            <button onClick={() => navigate(-1)} type="button" className="back_button-l">Назад</button> :
            <button onClick={() => navigate(-1)} type="button" className="back_button-s"><img src={arrowLeft}
                                                                                              alt="back"/>
            </button>}
    </div>);
};

export default BackButton;
import { useNavigate } from "react-router";
import "./style/style.css";

interface IntProps {
    img: string;
    title: string;
    desc: string;
    desc_width: string;
    path: string;
}

export const PossibilityCard = (props: IntProps) => {
    const { img, title, desc, desc_width, path } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/possibilities/${path}`);
    };

    return (
        <div className="card" onClick={handleClick}>
            <img className="card__img" src={img} alt={title} />
            <h3 className="card__title">{title} </h3>
            <span className="card__desc" style={{ width: `${desc_width}` }}>
                {desc}
            </span>
        </div>
    );
};

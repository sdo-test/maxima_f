import okImg from "../../assets/images/ok-circle.svg";
import "./style/style.css";

interface IntProps {
    text: string;
}

export const BenefitBlock = (props: IntProps) => {
    const { text } = props;

    return (
        <div className="benefit-block">
            <span className="benefit-block__text">{text}</span>
            <img src={okImg} alt="ok" />
        </div>
    );
};

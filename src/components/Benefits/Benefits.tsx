import benefits from "../../assets/data/benefits.json";
import { BenefitBlock } from "../BenefitBlock/BenefitBlock";
import "./style/style.css";

export const Benefits = (props: { disableMargin?: boolean }) => {
    const { disableMargin } = props;

    return (
        <div className={`benefits ${disableMargin ? "" : "benefits_margin"}`}>
            {benefits.map((val, idx) => (
                <BenefitBlock key={idx} text={val.item} />
            ))}
        </div>
    );
};

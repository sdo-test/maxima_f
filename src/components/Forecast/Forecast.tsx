import { IntForecast } from "../../types/types";
import { ForecastCard } from "../ForecastCard/ForecastCard";
import "./style/style.css";

export const Forecast = (props: { data: IntForecast }) => {
    const { data } = props;

    return (
        <div className="forecast">
            <h1 className="forecast__title">Погода на 5 дней</h1>
            <h2 className="forecast__city">{data.city.name}</h2>
            <div className="forecast__content">
                {data.list.map((val, idx) => (
                    <ForecastCard key={idx} data={val} />
                ))}
            </div>
        </div>
    );
};

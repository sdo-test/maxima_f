import { IntForecastCard } from "../../types/types";
import { getPressure } from "../../utils/functions";
import "./style/style.css";

export const ForecastCard = (props: { data: IntForecastCard }) => {
    const {
        clouds, // { all, // number };
        dt, // number;
        dt_txt, // string;
        main, // IntWeatherMain;
        pop, // number;
        sys, // { pod, // string };
        visibility, // number;
        weather, // IntWeatherDesc[];
        wind, // { speed, // number; deg, // number; gust, // number };
    } = props.data;

    const imgSrc = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="forecast-card">
            <h3 className="forecast-card__date">{dt_txt}</h3>
            <figure className="figure">
                <img className="figure__img" src={imgSrc} />
                <figcaption className="figure__desc">
                    {weather[0].description}
                </figcaption>
            </figure>
            <div>
                <div className="forecast__line">
                    <div className="line__desc">Температура</div>
                    <div>{main.temp} °С</div>
                </div>
                <div className="forecast__line">
                    <div className="line__desc">Давление</div>
                    <div>{getPressure(main.pressure)} мм рт ст</div>
                </div>
                <div className="forecast__line">
                    <div className="line__desc">Влажность</div>
                    <div>{main.humidity} %</div>
                </div>
            </div>
        </div>
    );
};

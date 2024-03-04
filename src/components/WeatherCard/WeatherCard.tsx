import { useNavigate } from "react-router";
import { IntWeatherFull } from "../../types/types";
import { getPressure } from "../../utils/functions";
import "./style/style.css";

interface IntProps {
    data: IntWeatherFull;
    style?: React.CSSProperties;
}

export const WeatherCard = (props: IntProps) => {
    const {
        name,
        feels_like,
        grnd_level,
        humidity,
        pressure,
        sea_level,
        temp,
        temp_max,
        temp_min,
        description,
        icon,
    } = props.data;
    const style = props.style;

    const imgSrc = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${name}`);
    };

    return (
        <div className="weather-card" style={style} onClick={handleClick}>
            <h3 className="weather-card__name">{name}</h3>
            <div className="weather-card__content">
                <figure className="content__figure">
                    <img
                        className="figure__img"
                        src={imgSrc}
                        alt={description}
                    />
                    <figcaption className="figure__desc">
                        {description}
                    </figcaption>
                </figure>
                <div className="content__stats">
                    <span className="stats__title">Температура</span>
                    <div className="stats__line">
                        <div className="stats__desc">Минимальная</div>
                        <div className="stats__val">{temp_min} °С</div>
                    </div>
                    <div className="stats__line">
                        <div className="stats__desc">Текущая</div>
                        <div className="stats__val">{temp} °С</div>
                    </div>
                    <div className="stats__line">
                        <div className="stats__desc">Максимальная</div>
                        <div className="stats__val">{temp_max} °С</div>
                    </div>
                </div>
                <div className="content__stats">
                    <span className="stats__title">Остальное</span>
                    <div className="stats__line">
                        <div className="stats__desc">Ощущается как</div>
                        <div className="stats__val">{feels_like} °С</div>
                    </div>
                    <div className="stats__line">
                        <div className="stats__desc">Влажность</div>
                        <div className="stats__val">{humidity} %</div>
                    </div>
                    <div className="stats__line">
                        <div className="stats__desc">Давление</div>
                        <div className="stats__val">
                            {getPressure(pressure)} мм рт ст
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

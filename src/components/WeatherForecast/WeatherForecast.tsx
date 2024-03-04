import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addForecast } from "../../redux/sliceWeather";
import { DefForecast, IntForecast } from "../../types/types";
import { getForecast, getLastOfPath } from "../../utils/functions";
import { Forecast } from "../Forecast/Forecast";
import "./style/style.css";

export const WeatherForecast = () => {
    const [forecastData, setForecastData] = useState<IntForecast>(DefForecast);

    const apiKey = useAppSelector((state) => state.login.apiKey);

    const weatherData = useAppSelector((state) => state.weather.data);

    const navigate = useNavigate();

    const location = useLocation();
    const path = decodeURI(getLastOfPath(location.pathname));

    const forecast = useAppSelector((state) => state.weather.forecast);

    const dispatch = useAppDispatch();

    const current = weatherData.filter(
        (val) => val.name.toUpperCase() === path.toUpperCase(),
    );

    const addForecastFunc = (val: IntForecast) => {
        dispatch(addForecast(val));
        setForecastData(val);
    };

    useEffect(() => {
        const elem = forecast.filter((val) => val.city.name === path);
        if (elem[0]) {
            setForecastData(elem[0]);
        } else {
            console.log("weatherData", weatherData);
            console.log("current", current);
            console.log("path", path);
            if (current[0]) {
                const forecastData = getForecast(
                    apiKey,
                    current[0].name,
                    addForecastFunc,
                );
                console.log("d", forecastData);
            }
        }
    }, [forecast]);

    return (
        <div className="weather-forecast">
            {current[0] ? <Forecast data={forecastData} /> : <PageNotFound />}
        </div>
    );
};

import { useEffect, useState } from "react";
import { ARR_CITIES } from "../../assets/data/constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addCity, initWeather } from "../../redux/sliceWeather";
import { IntWeatherFull } from "../../types/types";
import { getWeatherCity, getWeatherCitySimple } from "../../utils/functions";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import "./style/style.css";

export const WeatherContent = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [newCity, setNewCity] = useState("");

    const apiKey = useAppSelector((state) => state.login.apiKey);

    const dispatch = useAppDispatch();
    const stateWeather = useAppSelector((state) => state.weather);

    const addCityFunc = (val: IntWeatherFull) => {
        dispatch(addCity(val));
    };

    const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.preventDefault();
        }

        getWeatherCitySimple(apiKey, newCity, setErrorMessage, addCityFunc);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage("");
        setNewCity(e.target.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    useEffect(() => {
        if (stateWeather.data.length === 0) {
            ARR_CITIES.forEach((val) => {
                getWeatherCitySimple(apiKey, val, setErrorMessage, addCityFunc);
            });
        }

        // return function cleanup() {
        //     dispatch(initWeather());
        // };
    }, []);

    return (
        <section className="weather-content">
            <h2 className="weather__title">Погода на ближайшие дни</h2>
            <div className="weather__cards">
                {stateWeather.data.map((val, idx) => (
                    <WeatherCard key={idx} data={val} />
                ))}
            </div>
            <div className="weather-add">
                <input
                    className="weather-add__input"
                    type="text"
                    value={newCity}
                    placeholder="Введите название"
                    onChange={handleInput}
                    onKeyDown={handleEnter}
                />
                {}
                <button
                    className="weather-add__btn"
                    onClick={(e) => handleClick(e)}
                >
                    Добавить город
                </button>
            </div>
            {errorMessage && (
                <div className="weather__error">ОШИБКА: {errorMessage}</div>
            )}
        </section>
    );
};

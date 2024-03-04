import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { WeatherContent } from "../../components/WeatherContent/WeatherContent";
import { WeatherForecast } from "../../components/WeatherForecast/WeatherForecast";
import { WeatherLogin } from "../../components/WeatherLogin/WeatherLogin";
import { WeatherLogout } from "../../components/WeatherLogout/WeatherLogout";
import { useAppDispatch } from "../../redux/hooks";
import { AUTH } from "../../redux/sliceLogin";
import { initWeather } from "../../redux/sliceWeather";
import "./style/style.css";

export const PageWeather = () => {
    const [logged, setLogged] = useState(false);

    const dispatch = useAppDispatch();

    const logIn = () => {
        setLogged(true);
    };

    const logOut = () => {
        setLogged(false);
        dispatch(initWeather());
        localStorage.removeItem("apiKey");
    };

    useEffect(() => {
        const apiKey = localStorage.getItem("apiKey");

        if (apiKey !== null) {
            const obj = {
                apiKey: JSON.parse(apiKey),
            };
            dispatch(AUTH(obj));
            logIn();
        }
    }, []);

    return (
        <section className="page-weather">
            <h1 className="weather__title">Просмотр погоды</h1>
            <Routes>
                <Route path="/" element={<WeatherLogin logIn={logIn} />} />
                <Route path="/content" element={<WeatherContent />} />
                <Route path="/content/:id" element={<WeatherForecast />} />
            </Routes>
            {logged && <WeatherLogout logOut={logOut} />}
        </section>
    );
};

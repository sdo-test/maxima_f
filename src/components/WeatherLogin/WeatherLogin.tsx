import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { AUTH, IntLogin } from "../../redux/sliceLogin";
import "./style/style.css";

export const WeatherLogin = (props: { logIn: () => void }) => {
    const { logIn } = props;

    const [apiKey, setApiKey] = useState("");

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setApiKey(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (apiKey !== "") {
            const obj: IntLogin = {
                apiKey: apiKey,
            };
            dispatch(AUTH(obj));
            localStorage.setItem("apiKey", JSON.stringify(apiKey));
            logIn();

            navigate("content");
        }
    };

    useEffect(() => {
        const apiKey = localStorage.getItem("apiKey");

        if (apiKey !== null) {
            navigate("content");
        }
    }, []);

    return (
        <form name="weather-login" className="weather-login">
            <h3 className="weather-login__title">
                Введите API-KEY для{" "}
                <span className="weather-login__title_up">openweather*</span>
            </h3>
            <input
                className="weather-login__input"
                type="text"
                placeholder="Введите API_KEY"
                value={apiKey}
                onChange={handleChange}
            />
            <button
                className="weather-login__submit"
                type="submit"
                onClick={handleSubmit}
            >
                Войти
            </button>
            <span className="weather-login__link">
                * можно получить при регистрации на{" "}
                <a
                    href="https://openweathermap.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://openweathermap.org/
                </a>
            </span>
        </form>
    );
};

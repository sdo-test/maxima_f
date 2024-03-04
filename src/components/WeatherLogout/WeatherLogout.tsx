import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { LOGOUT } from "../../redux/sliceLogin";
import "./style/style.css";

export const WeatherLogout = (props: { logOut: () => void }) => {
    const { logOut } = props;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        localStorage.removeItem("apiKey");
        dispatch(LOGOUT());
        logOut();
        navigate("/weather");
    };

    return (
        <button className="weather-logout" onClick={handleClick}>
            выйти
        </button>
    );
};

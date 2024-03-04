import {
    IntForecast,
    IntWeatherDesc,
    IntWeatherFull,
    IntWeatherMain,
} from "../types/types";

export const getLastOfPath = (path: string): string => {
    const arrPath = path.split("/");
    const lastOfPath = arrPath[arrPath.length - 1];

    return lastOfPath;
};

export const getRnd = (num: number) => {
    const n = Math.floor(num * Math.random());

    return n;
};

export function getCoords(
    apiKey: string,
    city: string,
    setError: (val: string) => void,
) {
    const request = `geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    return fetch(`https://api.openweathermap.org/${request}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.message) {
                setError(data.message);
            } else if (!data[0]) {
                setError("Город не найден");
            }
            return data;
        });
}

export function getWeather(
    apiKey: string,
    lat: number,
    lon: number,
    setError: (val: string) => void,
) {
    const request = `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`;

    return fetch(`https://api.openweathermap.org/${request}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.message) {
                setError(data.message);
            }
            return data;
        });
}

export function getWeatherCity(
    apiKey: string,
    city: string,
    setError: (val: string) => void,
    addCity: (val: IntWeatherFull) => void,
) {
    const cityInfo = getCoords(apiKey, city, setError);

    cityInfo.then((data) => {
        if (!data.message && data[0]) {
            const cityWeather = getWeather(
                apiKey,
                data[0].lat,
                data[0].lon,
                setError,
            );
            cityWeather.then((data) => {
                if (!data.message) {
                    const dataMain = data.main as IntWeatherMain;
                    const dataDesc = data.weather as IntWeatherDesc[];

                    const weatherFull: IntWeatherFull = {
                        ...dataMain,
                        description: dataDesc[0].description,
                        icon: dataDesc[0].icon,
                        name: data.name,
                    };

                    addCity(weatherFull);
                }
            });
        }
    });
}

export function getWeatherCitySimple(
    apiKey: string,
    city: string,
    setError: (val: string) => void,
    addCity: (val: IntWeatherFull) => void,
) {
    const request = `data/2.5/weather?q=${city},ru&appid=${apiKey}&units=metric&lang=ru`;

    return fetch(`https://api.openweathermap.org/${request}`, {
        method: "GET",
    })
        .then((response) => {
            // console.log("r",response);
            return response.json();
        })
        .then((data) => {
            // console.log("d",data);
            if (data.message) {
                setError(data.message);
            } else {
                const dataMain = data.main as IntWeatherMain;
                const dataDesc = data.weather as IntWeatherDesc[];

                const weatherFull: IntWeatherFull = {
                    ...dataMain,
                    description: dataDesc[0].description,
                    icon: dataDesc[0].icon,
                    name: data.name,
                };

                addCity(weatherFull);
            }
            return data;
        });
}

export function getForecast(
    apiKey: string,
    city: string,
    setData: (val: IntForecast) => void,
    // setError: (val: string) => void,
) {
    const request = `data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    return fetch(`https://api.openweathermap.org/${request}`, {
        method: "GET",
    })
        .then((response) => {
            // console.log(response)
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            if (data.message) {
                // setError(data.message);
            } else {
                setData(data);
            }
            return;
        });
}

export const getPressure = (val: number) => {
    return (val * 0.750062).toFixed(0);
};

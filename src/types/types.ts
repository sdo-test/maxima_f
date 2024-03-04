export interface ModalProps {
    openModal: React.MouseEventHandler<HTMLButtonElement>;
    modalLocked: boolean;
}

export interface WeatherType {
    country: string;
    lat: number;
    local_names: {};
    lon: number;
    name: string;
    state: string;
}

export interface IntWeatherMain {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface IntWeatherDesc {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface IntWeatherFull
    extends IntWeatherMain,
        Pick<IntWeatherDesc, "description" | "icon"> {
    name: string;
}

export interface IntWeatherCity {
    [name: string]: IntWeatherFull;
}

export interface IntForecastCard {
    clouds: { all: number };
    dt: number;
    dt_txt: string;
    main: IntWeatherMain;
    pop: number;
    sys: { pod: string };
    visibility: number;
    weather: IntWeatherDesc[];
    wind: { speed: number; deg: number; gust: number };
}

export interface IntForecast {
    city: {
        coord: { lat: number; lon: number };
        country: string;
        id: number;
        name: string;
        population: number;
        sunrise: number;
        sunset: number;
        timezone: number;
    };
    cnt: number;
    cod: string;
    list: IntForecastCard[];
    message: number;
}

export const DefForecast: IntForecast = {
    city: {
        coord: {
            lat: 0,
            lon: 0,
        },
        country: "",
        id: 0,
        name: "",
        population: 0,
        sunrise: 0,
        sunset: 0,
        timezone: 0,
    },
    cnt: 0,
    cod: "",
    list: [],
    message: 0,
};

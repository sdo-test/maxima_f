import { SuitBlock } from "../SuitBlock/SuitBlock";
import "./style/style.css";

const ARR_SUIT = [
    {
        title: "Любых онлайн-школ",
        desc: (
            <span>
                Быстрый запуск, легкое управление, все инструменты
                <br />в одной платформе.
            </span>
        ),
        gap: "19px",
    },
    {
        title: "Образовательных курсов",
        desc: (
            <span>
                Статистика по всем образовательным процессам позволяет
                <br />
                постоянно улучшать ваш продукт.
            </span>
        ),
        gap: "20px",
    },
    {
        title: "Корпоративных учебных порталов",
        desc: (
            <span>
                Надежная защита, бесперебойная работа и высокая
                <br />
                производительность системы позволит наслаждаться
                <br />
                процессом обучения.
            </span>
        ),
        gap: "15px",
    },
];

export const Suit = () => {
    return (
        <div>
            <h2 className="suit__title suit__title_2">Точно подойдет для:</h2>
            <div className="suit__for">
                {ARR_SUIT.map((val, idx) => (
                    <SuitBlock
                        key={idx}
                        title={val.title}
                        desc={val.desc}
                        gap={val.gap}
                    />
                ))}
            </div>
        </div>
    );
};

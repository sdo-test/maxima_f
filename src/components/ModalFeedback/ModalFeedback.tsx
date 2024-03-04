import { useState } from "react";
import { ModalInput } from "../ModalInput/ModalInput";
import "./style/style.css";
import imgLogo from "../../assets/images/logo_EdSpace.svg";
import imgCancel from "../../assets/images/cancel.svg";

interface IntProps {
    modalOpened: boolean;
    closeModal: () => void;
    lockModal: () => void;
}

export const ModalFeedback = (props: IntProps) => {
    const { closeModal, modalOpened, lockModal } = props;

    const [names, setNames] = useState("");
    const [org, setOrg] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [agreement, setAgreement] = useState(false);

    const handleClose = () => {
        setNames("");
        setOrg("");
        setPosition("");
        setEmail("");
        setPhone("");
        setAgreement(false);

        closeModal();
    };

    const handleOk = () => {
        const obj = {
            names: names,
            org: org,
            position: position,
            email: email,
            phone: phone,
        };

        console.log("Feedback", obj);

        lockModal();
        handleClose();
    };

    const ARR_INPUTS = [
        {
            placeholder: "Имя Фамилия",
            value: names,
            setValue: setNames,
        },
        {
            placeholder: "Название организации",
            value: org,
            setValue: setOrg,
        },
        {
            placeholder: "Должность",
            value: position,
            setValue: setPosition,
        },
        {
            placeholder: "Email",
            value: email,
            setValue: setEmail,
        },
        {
            placeholder: "Телефон",
            value: phone,
            setValue: setPhone,
        },
    ];

    const classNameModal = `modal${(modalOpened && " modal_active") || ""}`;

    return (
        <div className={classNameModal}>
            <form className="feedback" name="feedback">
                <img src={imgLogo} alt="imgLogo" className="feedback__logo" />
                <div className="feedback__inputs">
                    {ARR_INPUTS.map((val, idx) => (
                        <ModalInput
                            key={idx}
                            placeholder={val.placeholder}
                            value={val.value}
                            setValue={val.setValue}
                        />
                    ))}
                </div>
                <div className="feedback__checkbox">
                    <input
                        className="feedback__checkbox-input"
                        name="checkbox"
                        type="checkbox"
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}
                    />
                    <label
                        className="feedback__checkbox-label"
                        htmlFor="checkbox"
                    >
                        Я согласен на обработку моих
                        <br />
                        <a
                            href="https://www.consultant.ru/document/cons_doc_LAW_61801/6c94959bc017ac80140621762d2ac59f6006b08c/"
                            target="__blank"
                        >
                            персональных данных
                        </a>
                    </label>
                </div>
                <button
                    className="feedback__button-send"
                    onClick={(e) => {
                        e.preventDefault();
                        handleOk();
                    }}
                    disabled={!agreement}
                >
                    Отправить
                </button>

                <button
                    className="feedback__button-close"
                    onClick={(e) => {
                        e.preventDefault();
                        handleClose();
                    }}
                >
                    <img
                        className="feedback__button-close__img"
                        src={imgCancel}
                        alt="close"
                    />
                </button>
            </form>
        </div>
    );
};

import React from "react";
import "./style/style.css";

interface IntProps {
    openModal: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled: boolean;
}

export const ButtonTry = (props: IntProps) => {
    const { openModal, className, disabled } = props;

    const classNameButton = `button-try ${className || ""}`;
    return (
        <button
            className={classNameButton}
            onClick={openModal}
            disabled={disabled}
        >
            попробовать бесплатно
        </button>
    );
};

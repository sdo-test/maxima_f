import { Possibilities } from "../../components/Possibilities/Possibilities";
import { Details } from "../../components/Details/Details";
import "./style/style.css";
import { Introduction } from "../../components/Introduction/Introduction";
import { Targets } from "../../components/Targets/Targets";
import { Contacts } from "../../components/Contacts/Contacts";
import { ModalProps } from "../../types/types";

export const PageMain = (props: ModalProps) => {
    const { openModal, modalLocked } = props;

    return (
        <div className="page-main">
            <Introduction modalProps={props} />
            <Targets openModal={openModal} modalLocked={modalLocked} />
            <Possibilities openModal={openModal} modalLocked={modalLocked} />
            <Details openModal={openModal} modalLocked={modalLocked} />
            <Contacts />
        </div>
    );
};

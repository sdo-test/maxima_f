import { useLocation } from "react-router";
import { Introduction } from "../../components/Introduction/Introduction";
import { ModalProps } from "../../types/types";
import { getLastOfPath, getRnd } from "../../utils/functions";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import cards from "../../assets/data/possibilities.json";
import { images } from "../../assets/images/images";
import { DetailsSchool } from "../../components/DetailsSchool/DetailsSchool";
import { Benefits } from "../../components/Benefits/Benefits";
import { Suit } from "../../components/Suit/Suit";
import { useEffect, useState } from "react";
import "./style/style.css";

export const PagePossibility = (props: ModalProps) => {
    const { openModal, modalLocked } = props;

    const [idxBlock, setIdxBlock] = useState(0);

    const location = useLocation();

    const finalPath = getLastOfPath(location.pathname);

    const elem = cards.filter((val) => val.path === finalPath)[0];

    const ARR_BLOCK = [
        <Benefits disableMargin={true} />,
        <DetailsSchool
            openModal={openModal}
            modalLocked={modalLocked}
            disableBtnClass={true}
        />,
        <Suit />,
    ];

    useEffect(() => {
        const path = `idxBlock_${finalPath}`;

        const localIdx = sessionStorage.getItem(path);

        if (localIdx === null) {
            const newIdx = getRnd(ARR_BLOCK.length);
            setIdxBlock(newIdx);
            sessionStorage.setItem(path, JSON.stringify(newIdx));
        } else {
            setIdxBlock(JSON.parse(localIdx));
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {elem ? (
                <div className="page-possibility">
                    <Introduction
                        modalProps={props}
                        title={elem.title}
                        desc={elem.descAdd}
                        img={images[elem.img as keyof typeof images]}
                        colorBg={JSON.parse(elem.colorBg)}
                    />
                    <div className="possibility__block">
                        {ARR_BLOCK[idxBlock]}
                    </div>
                </div>
            ) : (
                <PageNotFound />
            )}
        </>
    );
};

import { useState } from "react";
import { Route, Routes } from "react-router";
import { PageMain } from "../../pages/PageMain/PageMain";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";
import { PagePossibility } from "../../pages/PagePossibility/PagePossibility";
import { PageWeather } from "../../pages/PageWeather/PageWeather";
import { ModalFeedback } from "../ModalFeedback/ModalFeedback";
import "./style/style.css";

export const Main = () => {
    const [modalFeedback, setModalFeedback] = useState(false);
    const [modalLocked, setmodalLocked] = useState(false);

    const openModal = () => {
        setModalFeedback(true);
    };

    const closeModal = () => {
        setModalFeedback(false);
    };

    const lockModal = () => {
        setmodalLocked(true);
    };

    return (
        <main className="main">
            <Routes>
                <Route
                    path="/"
                    element={
                        <PageMain
                            openModal={openModal}
                            modalLocked={modalLocked}
                        />
                    }
                />
                <Route
                    path="/possibilities/:id"
                    element={
                        <PagePossibility
                            openModal={openModal}
                            modalLocked={modalLocked}
                        />
                    }
                />
                <Route path="/weather/*" element={<PageWeather />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            <ModalFeedback
                closeModal={closeModal}
                modalOpened={modalFeedback}
                lockModal={lockModal}
            />
        </main>
    );
};

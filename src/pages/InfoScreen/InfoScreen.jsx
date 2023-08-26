import React from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import Icons from "./Icons/icons";
import InfoFields from "./InfoFields/infoFields";
import './InfoScreen.css'

const InfoScreen = () => {

    return (
        <div className="infoscreen">
            <TopHeader />
            <Icons/>
            <InfoFields />
        </div>
    );
}

export default InfoScreen;

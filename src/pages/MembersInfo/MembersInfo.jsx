import React from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import './MembersInfo.scss'
import EventInfo from "../../components/EventInfo/EventInfo";
import { IMAGES } from "../../constants/images";

const MembersInfoScreen = () => {
    return (
        <div className="MemberInfoContainer">
            <TopHeader />
            <EventInfo />

            <div className="memberInfoDescription">
                <img src={IMAGES.MapIcon} alt="no_image" className="mapIcon" />
                <span className="locationText">Mumbai</span>

                <div className="descTitle">Description :</div>
                <div className="description">This is the first meeting of the new YPO year 23-24 to be held at Mumbai. Kindly be available at St Regis at sharp 6, after which forum rules apply.</div>
            </div>
        </div>
    )
}
export default MembersInfoScreen;
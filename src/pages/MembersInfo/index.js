import React from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import './index.css'
import EventInfo from "../../components/EventInfo/EventInfo";
import { IMAGES } from "../../constants/images";

const MembersInfoScreen = () => {
    return (
        <div className="MemberInfoContainer">
            <TopHeader />
            <EventInfo />

            <div className="memberInfoDescription">
                <img src={IMAGES.MapIcon} alt="no_image" width="24px" height="24px" />
                <span className="locationText">Mumbai</span>

                <p className="descTitle">Description :</p>
                <p className="description">This is the first meeting of the new YPO year 23-24 to be held at Mumbai. Kindly be available at St Regis at sharp 6, after which forum rules apply.</p>
            </div>
        </div>
    )
}
export default MembersInfoScreen;
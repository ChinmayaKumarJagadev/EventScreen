import React from "react";
import './AnimationInfo.scss'
import { IMAGES } from "../../../constants/images";
import LeadsInfo from '../LeadsInfo/LeadsInfo'

const AnimationInfo = ({ data }) => {
    return (
        <div className="mainLeadContainer">
            <div className="descContainer">
                <img src={data?.leadOwnerDetails?.dpURL} alt="no_image" className="maleIcon" />
                <div className="userDetails">
                    <div className="name">{data?.leadOwnerDetails?.firstname} {data?.leadOwnerDetails?.lastname}</div>
                    <div className="profession">{data?.leadOwnerDetails?.title?.[0]?.value} | {data?.leadOwnerDetails?.companyName}</div>
                </div>
                <img src={IMAGES.ShareIcon} alt="no_image" className="maleIcon" />

            </div>
            <LeadsInfo data={data} />
        </div>
    )
}
export default AnimationInfo;
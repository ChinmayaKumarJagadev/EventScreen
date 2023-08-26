import React from "react";
import './members.scss';
import { memberData } from "../data";

const Members = () => {
    return (
        <div>
            {memberData?.map((member, index) => (
                <div className="d-flex mt-3" key={index}>
                    <img src={member?.icon} alt="no_image" className="memberIcons"/>
                    <div className="memberDetails">
                        <div className="memberName">{member?.name}</div>
                        <div className={member?.status === "Accepted" ? 'AcceptedStatusText' : 'MaybeStatusText'}>{member?.status}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Members;

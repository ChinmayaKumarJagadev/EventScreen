import React from "react";
import './members.css';
import { IMAGES } from "../../constants/images";

const memberData = [
    { name: "Saurabh Goswamy", status: "Accepted", icon: IMAGES.SouravIcon },
    { name: "Amit Ramani", status: "Accepted", icon: IMAGES.AmitIcon },
    { name: "Brahmini Narra", status: "Accepted", icon: IMAGES.BrahminiIcon },
    { name: "Nilima divi", status: "Accepted", icon: IMAGES.NilimaIcon },
    { name: "Rajesh Kharbanda", status: "Accepted", icon: IMAGES.RajeshIcon },
    { name: "Sanjay Shah", status: "maybe", icon: IMAGES.SanjayIcon },
    { name: "Trista", status: "maybe", icon: IMAGES.TristaIcon },
    { name: "Saurabh Goswamy", status: "Accepted", icon: IMAGES.SouravIcon },
    { name: "Amit Ramani", status: "Accepted", icon: IMAGES.AmitIcon },
    { name: "Brahmini Narra", status: "Accepted", icon: IMAGES.BrahminiIcon },
    { name: "Nilima divi", status: "Accepted", icon: IMAGES.NilimaIcon },
    { name: "Rajesh Kharbanda", status: "Accepted", icon: IMAGES.RajeshIcon },
    { name: "Sanjay Shah", status: "maybe", icon: IMAGES.SanjayIcon },
    { name: "Trista", status: "maybe", icon: IMAGES.TristaIcon },
    { name: "Saurabh Goswamy", status: "Accepted", icon: IMAGES.SouravIcon },
    { name: "Amit Ramani", status: "Accepted", icon: IMAGES.AmitIcon },
];

const Members = () => {
    return (
        <div>
            {memberData.map((member, index) => (
                <div className="d-flex mt-3" key={index}>
                    <img src={member.icon} alt="no_image" width="46px" height="46px" />
                    <div className="memberDetails">
                        <p className="memberName">{member.name}</p>
                        <p className={member.status === "Accepted" ? 'AcceptedStatusText' : 'MaybeStatusText'}>{member.status}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Members;

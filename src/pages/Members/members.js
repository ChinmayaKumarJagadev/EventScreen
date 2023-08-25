import React from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import './members.css';
import { IMAGES } from "../../constants/images";

const memberData = [
    { name: "Saurabh Goswamy", status: "Accepted" },
    { name: "Saurabh Goswamy", status: "Accepted" },
    { name: "Saurabh Goswamy", status: "Accepted" }
];

const Members = () => {
    return (
        <div>
            {memberData.map((member, index) => (
                <div className="d-flex mt-3" key={index}>
                    <img src={IMAGES.SouravIcon} alt="no_image" />
                    <p>{member.name}</p>
                    <p>{member.status}</p>
                </div>
            ))}
        </div>
    )
}

export default Members;

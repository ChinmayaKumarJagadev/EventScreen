import React from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import MembersHome from "./Member/members";

const Members = () => {
    return (
        <div className="membersContainer">
            <TopHeader />
            <MembersHome />
        </div>
    )
}
export default Members
import React from "react";
import './icons.scss';
import { iconImages } from "./data";

const Icons = () => {

    return (
        <div>
            <div className="fetchText mt-3">Fetch data from</div>
            <div className="iconContainer mt-0">
                {iconImages?.map((icon, index) => (
                    <img key={index} src={icon} alt="no_image_found" className="allFavIcons" />
                ))}
            </div>

            <div className="titleInfo mt-3">lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
    );
}

export default Icons;

import React, { useState } from "react";
import './infoFields.css';
import { handleChange, handleSubmit } from "./inputFieldsFunction";
import { IMAGES } from "../../../constants/images";
import ButtonContainer from '../../../components/Button/Button'

const InfoFields = () => {
    const [formData, setFormData] = useState({});
    const fields = [{ name: "Name", type: "text", placeholder: 'Type here' }, { name: 'Your title', type: 'text', placeholder: 'Type here' },
    { name: 'Phone number', type: 'text', placeholder: 'Type here' }, { name: "Email id", type: "email", placeholder: 'Type here' },
    { name: "Add your instagram (optional)", type: "text", placeholder: 'Your instagram id', icon: IMAGES.InstaIcon },
    { name: "Add your LinkedIn (optional)", type: "text", placeholder: 'Your LinkedIn id', icon: IMAGES.LinkedinIcon }];

    return (
        <form onSubmit={(event) => handleSubmit(event, formData)}>
            {fields.map((field) => (
                <div className="form-group" key={field.name}>
                    <label htmlFor={field.name.toLowerCase()} className="form-label">{field.name}:</label>
                    {field.name.includes("instagram") || field.name.includes("LinkedIn") ? (
                        <div className="image-with-text-placeholder">
                            <input type={field.type} id={field.name.toLowerCase()} name={field.name.toLowerCase()} className="form-input"
                                placeholder={field.placeholder} value={formData[field.name.toLowerCase()] || ""}
                                onChange={(event) => handleChange(event, formData, setFormData)} />
                            <img src={field.icon} alt="no_image_found" width="17px" height="17px" />
                        </div>
                    ) : (
                        <input type={field.type} id={field.name.toLowerCase()} name={field.name.toLowerCase()} className="form-input"
                            placeholder={field.placeholder} value={formData[field.name.toLowerCase()] || ""}
                            onChange={(event) => handleChange(event, formData, setFormData)} />
                    )}
                </div>
            ))}
            <ButtonContainer handleSubmit={(event) => handleSubmit(event, formData)} />
        </form>
    );
}

export default InfoFields;

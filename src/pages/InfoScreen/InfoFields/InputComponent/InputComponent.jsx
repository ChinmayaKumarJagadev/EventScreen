import React from "react";
import { handleChange } from "../inputFieldsFunction";
import './InputComponent.scss'

const InputField = ({ field, formData, setFormData }) => {
  return (
    <div className="form-group" key={field.name}>
      <label htmlFor={field.name.toLowerCase()} className="form-label">
        {field.name}:
      </label>
      {field.name.includes("instagram") || field.name.includes("LinkedIn") ? (
        <div className="image-with-text-placeholder">
          <input
            type={field.type}
            id={field.name.toLowerCase()}
            name={field.name.toLowerCase()}
            className="form-input"
            placeholder={field.placeholder}
            value={formData[field.name.toLowerCase()] || ""}
            onChange={(event) => handleChange(event, formData, setFormData)}
          />
          <img src={field.icon} alt="no_image_found" className="InfoFieldsIcon" />
        </div>
      ) : (
        <input
          type={field.type}
          id={field.name.toLowerCase()}
          name={field.name.toLowerCase()}
          className="form-input"
          placeholder={field.placeholder}
          value={formData[field.name.toLowerCase()] || ""}
          onChange={(event) => handleChange(event, formData, setFormData)}
        />
      )}
    </div>
  );
};

export default InputField;

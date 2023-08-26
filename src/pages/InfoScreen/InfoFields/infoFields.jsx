import React, { useState } from "react";
import { handleChange, handleSubmit } from "./inputFieldsFunction";
import ButtonContainer from '../../../components/Button/Button';
import { fields } from "./data";
import  InputField  from './InputComponent/InputComponent'

const InfoFields = () => {
    const [formData, setFormData] = useState({});

    return (
        <form onSubmit={(event) => handleSubmit(event, formData)}>
            {fields?.map((field) => (
                <InputField
                    key={field?.name}
                    field={field}
                    formData={formData}
                    setFormData={setFormData}
                    handleChange={handleChange}
                />
            ))}
            <ButtonContainer handleSubmit={(event) => handleSubmit(event, formData)} />
        </form>
    );
}

export default InfoFields;

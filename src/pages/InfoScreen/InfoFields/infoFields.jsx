import React, { useState } from "react";
import { submitInfo } from "./inputFieldsFunction";
import ButtonContainer from '../../../components/Button/Button';
import { fields } from "./data";
import  InputField  from './InputComponent/InputComponent'

const InfoFields = () => {
    const [formData, setFormData] = useState({});

    return (
        <form onSubmit={(event) => submitInfo(event, formData)}>
            {fields?.map((field) => (
                <InputField
                    key={field?.name}
                    field={field}
                    formData={formData}
                    setFormData={setFormData}
                />
            ))}
            <ButtonContainer handleSubmit={(event) => submitInfo(event, formData)} />
        </form>
    );
}

export default InfoFields;

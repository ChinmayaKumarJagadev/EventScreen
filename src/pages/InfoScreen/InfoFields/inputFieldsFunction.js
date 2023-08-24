export const handleChange = (event, formData, setFormData) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
};

export const handleSubmit = (event, formData) => {
    event.preventDefault();
    console.log(formData);
};

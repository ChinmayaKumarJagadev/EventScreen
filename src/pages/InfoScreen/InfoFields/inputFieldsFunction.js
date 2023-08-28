export const changeInfo = (event, formData, setFormData) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
};

export const submitInfo = (event, formData) => {
    event.preventDefault();
    console.log(formData);
};

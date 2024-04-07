import React, { useState } from "react";
import "./contact.style.scss"

function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (formData.fullName.length < 3) {
            errors.fullName = "Full name must be at least 3 characters.";
        }
        if (formData.subject.length < 3) {
            errors.subject = "Subject must be at least 3 characters.";
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid.";
        }
        if (formData.body.length < 3) {
            errors.body = "Body must be at least 3 characters.";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            console.log(formData);
            setFormData({
                fullName: "",
                subject: "",
                email: "",
                body: ""
            });
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <main>
            <h1>Contact</h1>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {formErrors.fullName && <p>{formErrors.fullName}</p>}
                    </div>
                    <div>
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        {formErrors.subject && <p>{formErrors.subject}</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <p>{formErrors.email}</p>}
                    </div>
                    <div>
                        <label>Body</label>
                        <textarea
                            name="body"
                            value={formData.body}
                            onChange={handleChange}
                        />
                        {formErrors.body && <p>{formErrors.body}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}

export default Contact;

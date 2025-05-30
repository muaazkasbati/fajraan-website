import React, { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
    // State hooks for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async () => {
        try {
            // Send form data to API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check response status
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData.message);
                return;
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="flex flex-col gap-y-6">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-[50px] border border-[#cccccc] bg-transparent px-6 py-5 text-base font-bold leading-none text-white placeholder:text-[#cccccc]"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full rounded-[50px] border border-[#cccccc] bg-transparent px-6 py-5 text-base font-bold leading-none text-white placeholder:text-[#cccccc]"
                required
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full rounded-[50px] border border-[#cccccc] bg-transparent px-6 py-5 text-base font-bold leading-none text-white placeholder:text-[#cccccc]"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="min-h-[150px] w-full rounded-[20px] border border-[#cccccc] bg-transparent px-6 py-5 text-base font-bold leading-none text-white placeholder:text-[#cccccc]"
                required
            ></textarea>

            <button
                type="button"
                onClick={handleSubmit}
                className="btn-primary relative justify-start pr-20 md:pr-[118px]"
            >
                Send message
                <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black">
                    <Image
                        src="assets/img/icons/icon-buttery-white-arrow-right.svg"
                        alt="icon-buttery-white-arrow-right"
                        width={34}
                        height={28}
                    />
                </span>
            </button>
        </div>
    );
};

export default ContactForm;
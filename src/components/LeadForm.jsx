import React from 'react'
import Input from './Input';
import Button from './Button';
import Select from './Select';

export default function LeadForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            // Send form data to API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, }),
            });

            // Check response status
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData.message);
                return;
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const fleetSizeOptions = [
        { value: "1-10", label: "1-10" },
        { value: "10-50", label: "10-50" },
        { value: "50+", label: "50+" }
    ];

    const bookingMethodOptions = [
        { value: "Spreadsheets", label: "Spreadsheets" },
        { value: "WhatsApp/phone", label: "WhatsApp/phone" },
        { value: "Third-party software", label: "Third-party software" },
        { value: "Other", label: "Other" }
    ];
    return (
        <>
            <form autoComplete="off" id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-4">

                <Input
                    placeholder="Name"
                    required
                    pattern="[A-Za-z\s]+"
                    title="Please enter only alphabets and spaces"
                    type="text"
                    name="name"
                    id="name"
                />

                <Input
                    placeholder="Company Name"
                    type="text"
                    name="company"
                    id="company"
                />

                <Input
                    placeholder="Email Address"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    type="email"
                    id="email"
                    name="email"
                />

                <Select
                    id="fleetSize"
                    name="fleetSize"
                    required
                    placeholder="Fleet Size"
                    options={fleetSizeOptions}
                />

                <Select
                    id="bookingMethod"
                    name="bookingMethod"
                    required
                    placeholder="Current Booking Method"
                    options={bookingMethodOptions}
                />

                <div className="w-full mt-5">
                    <Button variant="primary" id="submit-form" ariaLabel="Submit" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </>
    )
}

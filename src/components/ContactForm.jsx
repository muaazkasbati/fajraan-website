import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';

export default function ContactForm() {
    const router = useRouter()
    const [message, setMessage] = useState('');
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
                body: JSON.stringify({ ...data, plan: router.query.plan ? router.query.plan : '' }),
            });

            // Check response status
            if (!response.ok) {
                const errorData = await response.json();
                setMessage(`Error submitting form: ${errorData.message}`);
                console.error('Error submitting form:', errorData.message);
                return;
            } else {
                setMessage('Your message has been sent successfully!');
                e.target.reset(); // Reset the form fields
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <>
            <form autoComplete="off" id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <Input
                        placeholder="Your name"
                        required
                        pattern="[A-Za-z\s]+"
                        title="Please enter only alphabets and spaces"
                        type="text"
                        name="name"
                        id="name"
                    />

                    <Input
                        placeholder="Company name"
                        type="text"
                        name="company"
                        id="company"
                    />
                </div>
                <Input
                    placeholder="Enter your phone number"
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    pattern="^\+?[0-9]{7,15}$"
                    title="Please enter a valid phone number (digits only, with optional + and 7–15 digits)"
                />

                <Input
                    placeholder="Enter your e-mail address"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    type="email"
                    id="email"
                    name="email"
                />


                <Input
                    placeholder="What is the subject of your query?"
                    type="text"
                    name="subject"
                    id="subject"
                />

                <Textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Describe about your project"
                />
                {message && (
                    <p className={`text-center text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </p>
                )}
                <div className="w-full mt-5">
                    <Button variant="primary" id="submit-form" ariaLabel="Submit" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </>
    )
}

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react'

export default function ContactForm() {
    const router = useRouter()
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
                console.error('Error submitting form:', errorData.message);
                return;
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
                <div className="grid md:grid-col-2 gap-3">
                    <div className="">
                        <input
                            placeholder="Your name"
                            required
                            className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                            pattern="[A-Za-z\s]+"
                            title="Please enter only alphabets and spaces"
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>
                    <div className="">
                        <input
                            placeholder="Company name"
                            className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                            type="text"
                            name="company"
                            id="company"
                        />
                    </div>
                </div>
                <div className="">
                    <input
                        placeholder="Enter your phone number"
                        required
                        className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                        type="tel"
                        name="phone"
                        id="phone"
                        pattern="^\+?[0-9]{7,15}$"
                        title="Please enter a valid phone number (digits only, with optional + and 7–15 digits)"
                    />
                </div>
                <div className="">
                    <input
                        placeholder="Enter your e-mail address"
                        required
                        className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="">
                    <input
                        placeholder="What is the subject of your query?"
                        className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                        type="text"
                        name="subject"
                        id="subject"
                    />
                </div>
                <div className="">
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Describe about your project"
                        className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                    ></textarea>
                </div>
                <div className="w-full mt-5">
                    <button
                        id="submit-form" aria-label="Submit" type="submit"
                        className="group inline-flex w-max items-center gap-2 rounded-[40px] border border-primary bg-primary px-5 py-2.5 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] text-white transition-all duration-500 ease-in-out md:px-5 md:py-2.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3.5 cursor-pointer"
                    >
                        Submit
                        <span className="relative inline-block h-5.5 w-5.5 overflow-hidden text-white">
                            <ArrowRight size={22} className="absolute left-0 top-0 -rotate-45 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-5.5 group-hover:-top-5.5" />
                            <ArrowRight size={22} className="absolute -left-5.5 top-5.5 -rotate-45 opacity-80 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-0 group-hover:top-0" />
                        </span>
                    </button>
                </div>
            </form>
        </>
    )
}

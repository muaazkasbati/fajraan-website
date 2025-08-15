import BreadCrumb from '@/components/BreadCrumb'
import FaqsSection from '@/components/FaqsSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | Fajraan Tech</title>
                <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
                <meta name="author" content="Fajraan Tech" />
                <meta property="og:title" content="Contact Us | Fajraan Tech" />
                <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | Fajraan Tech" />
                <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
                <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <main className="main-wrapper">
                    <BreadCrumb page="Contact Us" />

                    <section class="section-contact-form">
                        <div class="section-space">
                            <div class="container">
                                <div class="grid grid-cols-1 items-end gap-x-20 gap-y-10 lg:grid-cols-[1fr_minmax(0,420px)]">
                                    <div class="jos" data-jos_animation="fade-left">

                                        <div class="section-block mb-10 md:mb-[60px] xl:mb-20">
                                            <h2>
                                                Contact us for a
                                                <span>
                                                    <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                                                </span>
                                                personal experience
                                            </h2>
                                        </div>

                                        <form action="../../../external.html?link=https://formspree.io/f/{form_id}" method="post" class="flex flex-col gap-y-6 rounded-[30px] border border-black p-[30px]">
                                            <div>
                                                <label for="contact-name" class="mb-3 block pl-6 text-base font-bold">Your name</label>
                                                <input type="text" name="contact-name" id="contact-name" class="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base font-bold" required />
                                            </div>
                                            <div>
                                                <label for="contact-email" class="mb-3 block pl-6 text-base font-bold">Email Address</label>
                                                <input type="email" name="contact-email" id="contact-email" class="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base font-bold" required />
                                            </div>
                                            <div>
                                                <label for="contact-phone" class="mb-3 block pl-6 text-base font-bold">Phone No</label>
                                                <input type="tel" name="contact-phone" id="contact-phone" class="w-full rounded-[50px] border border-black bg-colorIvory px-8 py-4 text-base font-bold" required />
                                            </div>
                                            <div>
                                                <label for="contact-massage" class="mb-3 block pl-6 text-base font-bold">Write your message here...</label>
                                                <textarea name="contact-massage" id="contact-massage" class="min-h-52 w-full rounded-[20px] border border-black bg-colorIvory px-8 py-4 text-base font-bold"></textarea>
                                            </div>
                                            <div>
                                                <button type="submit" class="btn-black">
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="jos hidden overflow-hidden rounded-[20px] border-2 border-black lg:block lg:border-[5px]" data-jos_animation="fade-right">
                                        <img src="assets/img/images/th-1/contact-img.jpg" alt="contact-img" width="456" height="731" class="h-full w-full object-cover" />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    <section class="section-contact-info">

                        <div class="section-space-bottom">

                            <div class="container">
                                <div class="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[866px]">
                                    <h2 class="jos">
                                        Contact Information {" "}
                                        <span>
                                            <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                                        </span>
                                    </h2>
                                </div>


                                <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                                    <li class="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]">
                                        <div class="h-auto w-10">
                                            <img src="assets/img/icons/icon-buttery-white-phone.svg" alt="icon-buttery-white-phone" width="30" height="30" class="h-auto w-10" />
                                        </div>
                                        <div class="flex-1">
                                            <span class="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl">WhatsApp us</span>
                                            <div class="flex flex-col text-lg leading-[1.42] lg:text-[21px]">
                                                <a href="https://wa.me/966598473216" class="text-colorButteryWhite hover:text-colorLightLime">+966 59 847 3216</a>
                                                {/* <a href="tel:+0123456789" class="text-colorButteryWhite hover:text-colorLightLime">+012-345-6789</a> */}
                                            </div>
                                        </div>
                                    </li>


                                    <li class="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]">
                                        <div class="h-auto w-10">
                                            <img src="assets/img/icons/icon-buttery-white-mail.svg" alt="icon-buttery-white-mail" width="40" height="40" class="h-auto w-10" />
                                        </div>
                                        <div class="flex-1">
                                            <span class="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl">Email us</span>
                                            <div class="flex flex-col text-lg leading-[1.42] lg:text-[21px]">
                                                <a href="mailto:info@fajraan.com" class="text-colorButteryWhite hover:text-colorLightLime">info@fajraan.com</a>
                                                {/* <a href="mailto:" class="text-colorButteryWhite hover:text-colorLightLime">example@gmail.com</a> */}
                                            </div>
                                        </div>
                                    </li>


                                    <li class="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]">
                                        <div class="h-auto w-10">
                                            <img src="assets/img/icons/icon-buttery-white-location-marker.svg" alt="icon-buttery-white-location-marker" width="40" height="40" class="h-auto w-10" />
                                        </div>
                                        <div class="flex-1">
                                            <span class="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl">Office address</span>
                                            <div class="flex flex-col text-lg leading-[1.42] lg:text-[21px]">
                                                <address class="not-italic text-colorButteryWhite">
                                                    Riyadh, Saudi Arabia.
                                                </address>
                                            </div>
                                        </div>
                                    </li>

                                </ul>

                                <div class="jos mt-10 md:mt-[60px] lg:mt-20">
                                    <div class="h-96 w-full overflow-hidden rounded-[20px] border-2 border-black lg:h-[600px] lg:rounded-[30px] lg:border-[5px]">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.3405872062!2d46.163060305303105!3d24.723749967914713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1749493031552!5m2!1sen!2s" width="600" height="450" className="h-full w-full border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>

                    <div class="horizontal-line bg-[#e6e6e6]"></div>

                    <FaqsSection />
                </main>
                <Footer />
            </div>
        </>
    )
}

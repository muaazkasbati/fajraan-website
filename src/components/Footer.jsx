import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'

const Footer = () => {
    return (
        <>
            <footer className="section-footer" id='contact'>
                <div className="bg-secondary">
                    <div className="section-space">
                        <div className="container">
                            <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-x-20 xl:gap-x-24 xxl:gap-x-[139px]">
                                <div>
                                    <div className="section-block text-white">
                                        <h2 className="mb-6">
                                            Let’s build your {" "}
                                            <span>
                                                <img
                                                    src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                                    alt="decorative star"
                                                    width="74"
                                                    height="70"
                                                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                                                />
                                            </span>
                                            digital presence
                                        </h2>

                                        <p className="section-para">
                                            At Fajraan Tech, we craft bold, modern experiences for brands ready to stand out. Whether you're launching a startup or refining your online identity, we blend strategy, design, and technology to bring your vision to life.
                                        </p>
                                    </div>


                                    <div className="grid grid-cols-[1fr_auto] items-center">
                                        <div>
                                            <ul className="mt-12 flex flex-col gap-y-3">
                                                <li>
                                                    <span className="block font-syne text-[21px] font-bold leading-[1.42] text-colorLightLime">Give us a WhatsApp call:</span>
                                                    <a href="https://wa.me/971542259592" target="_blank" rel="noopener noreferrer" className="text-[21px] leading-[1.42] text-white">+971 54 225 9592</a>
                                                </li>
                                                <li>
                                                    <span className="block font-syne text-[21px] font-bold leading-[1.42] text-colorLightLime">Send us an email:
                                                    </span>
                                                    <a href="mailto:info@fajraan.com" className="text-[21px] leading-[1.42] text-white">info@fajraan.com</a>
                                                </li>
                                            </ul>

                                            <div className="mt-11 flex w-full gap-4">
                                                {/* <a href="../../../external.html?link=http://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-white bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-white">
                                                    <img src="/assets/img/icons/icon-logo-buttery-white-twitter.svg" alt="icon-logo-buttery-white-twitter" width="19" height="16" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                                                    <img src="/assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                                </a> */}
                                                <Link href="https://www.instagram.com/fajraan_tech" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-white bg-primary transition-all duration-300 hover:border-primary hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-white">
                                                    <img src="/assets/img/icons/icon-logo-buttery-white-instagram.svg" alt="icon-logo-buttery-white-instagram" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                                                    <img src="/assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                                </Link>
                                                <Link href="https://www.facebook.com/fajraantech" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-white bg-primary transition-all duration-300 hover:border-primary hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-white">
                                                    <img src="/assets/img/icons/icon-logo-buttery-white-facebook.svg" alt="icon-logo-buttery-white-facebook" width="10" height="17" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                                                    <img src="/assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="10" height="17" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                                </Link>
                                                <Link href="https://www.linkedin.com/company/fajraan-tech" target="_blank" rel="noopener noreferrer" className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-white bg-primary transition-all duration-300 hover:border-primary hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-white">
                                                    <img src="/assets/img/icons/icon-logo-buttery-white-linkedin.svg" alt="icon-logo-buttery-white-linkedin" width="17" height="18" className="opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                                                    <img src="/assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="17" height="18" className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="hidden lg:inline-block">
                                            <img src="/assets/img/elemnts/element-light-lime-curve-arrow.svg" alt="element-light-lime-curve-arrow" width="284" height="153" className="h-auto max-w-52 lg:inline-block xl:max-w-full" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span className="display-heading display-heading-5 mb-[30px] block text-white">Send us a message</span>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="horizontal-line bg-white/30"></div>

                    <div className="py-[35px]">
                        <div className="container">
                            <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-4 lg:justify-between">
                                <Link href="/">
                                    <img src="/assets/img/logo-white.png" alt="Faraan" width="121" height="24" />
                                </Link>

                                <div className="text-white text-sm">
                                    &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Fajraan Tech
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

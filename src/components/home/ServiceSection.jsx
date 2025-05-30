import React from 'react'

const ServiceSection = () => {
    const servicesData = {
        "title": "Our Core Services",
        "subtitle": "We craft technology-driven solutions that empower businesses across the Middle East.",
        "services": [
            {
                "icon": "th-1-service-icon-1.svg",
                "title": "UI/UX Design",
                "description": "Creating modern, intuitive interfaces for web and mobile apps tailored to user behavior and business goals."
            },
            {
                "icon": "th-1-service-icon-3.svg",
                "title": "Custom Web Applications",
                "description": "Building robust, scalable web platforms that drive business efficiency and growth."
            },
            {
                "icon": "th-1-service-icon-3.svg",
                "title": "Mobile App Development",
                "description": "Native and cross-platform iOS & Android apps with high performance and seamless user experience."
            },
            {
                "icon": "th-1-service-icon-3.svg",
                "title": "Desktop Application Development",
                "description": "Secure and high-performance desktop apps tailored to enterprise needs and workflows."
            },
            {
                "icon": "th-1-service-icon-4.svg",
                "title": "SEO Optimization",
                "description": "Improving search visibility and ranking for your custom-built websites with technical and on-page SEO."
            },
            {
                "icon": "th-1-service-icon-4.svg",
                "title": "Content & Copywriting",
                "description": "Professional, SEO-friendly content tailored to your industry and audience."
            },
            {
                "icon": "th-1-service-icon-2.svg",
                "title": "Graphic Design",
                "description": "Creative visuals including branding, brochures, social media graphics, and ad creatives."
            },
            {
                "icon": "th-1-service-icon-4.svg",
                "title": "Data Entry & Management",
                "description": "Accurate, fast, and secure data entry services for all industries by experienced personnel."
            }
        ]
    }

    return (
        <>
            {/* <section className="section-service">
                <div className="bg-colorIvory">
                    <div className="section-space">
                        <div className="container">
                            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                                <h2 className="jos">
                                    We provide effective design
                                    <span>
                                        solutions
                                        <img
                                            src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                            alt="shape-light-lime-5-arms-star"
                                            width="74"
                                            height="70"
                                            className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                                        />
                                    </span>
                                </h2>
                            </div>

                            <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                <li className="jos group/team-item" data-jos_delay="0">
                                    <div className="shadow-bg group h-full">
                                        <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                                            <img
                                                src="assets/img/icons/th-1-service-icon-1.svg"
                                                alt="th-1-service-icon-1"
                                                width="64"
                                                height="70"
                                                className="h-[70px] w-auto"
                                            />

                                            <h4 className="mb-[15px] mt-[30px]">UI/UX Design</h4>
                                            <p className="mb-7">
                                                Focusing on user interface (UI) and user experience
                                                (UX) design to enhance the usability and
                                                accessibility of digital products & app.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                                            >
                                                <img
                                                    src="assets/img/icons/icon-black-arrow-right.svg"
                                                    alt="icon-black-arrow-right"
                                                    width="34"
                                                    height="28"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                <li className="jos" data-jos_delay="0.3">
                                    <div className="shadow-bg group h-full">
                                        <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                                            <img
                                                src="assets/img/icons/th-1-service-icon-2.svg"
                                                alt="th-1-service-icon-2"
                                                width="77"
                                                height="70"
                                                className="h-[70px] w-auto"
                                            />

                                            <h4 className="mb-[15px] mt-[30px]">Graphic Design</h4>
                                            <p className="mb-7">
                                                Creating visual elements such as logos, branding
                                                materials, page layout techniques, brochures, &
                                                other marketing collateral.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                                            >
                                                <img
                                                    src="assets/img/icons/icon-black-arrow-right.svg"
                                                    alt="icon-black-arrow-right"
                                                    width="34"
                                                    height="28"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                <li className="jos" data-jos_delay="0.6">
                                    <div className="shadow-bg group h-full">
                                        <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                                            <img
                                                src="assets/img/icons/th-1-service-icon-3.svg"
                                                alt="th-1-service-icon-3"
                                                width="75"
                                                height="70"
                                                className="h-[70px] w-auto"
                                            />

                                            <h4 className="mb-[15px] mt-[30px]">Web Design</h4>
                                            <p className="mb-7">
                                                Designing and developing websites to ensure they are
                                                visually look and appealing, user-friendly, and
                                                functional your website.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                                            >
                                                <img
                                                    src="assets/img/icons/icon-black-arrow-right.svg"
                                                    alt="icon-black-arrow-right"
                                                    width="34"
                                                    height="28"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                <li className="jos" data-jos_delay="0.9">
                                    <div className="shadow-bg group h-full">
                                        <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                                            <img
                                                src="assets/img/icons/th-1-service-icon-4.svg"
                                                alt="th-1-service-icon-4"
                                                width="55"
                                                height="70"
                                                className="h-[70px] w-auto"
                                            />

                                            <h4 className="mb-[15px] mt-[30px]">Motion Graphics</h4>
                                            <p className="mb-7">
                                                Creating animated graphics, videos for various
                                                purposes, including marketing and entertainment. To
                                                help sell a product or service.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                                            >
                                                <img
                                                    src="assets/img/icons/icon-black-arrow-right.svg"
                                                    alt="icon-black-arrow-right"
                                                    width="34"
                                                    height="28"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="section-service" id='services'>
                <div className="bg-colorIvory">
                    <div className="section-space">
                        <div className="container">
                            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                                <h2 className="jos">
                                    {servicesData.title}{' '}
                                    <span>
                                        {servicesData.highlighted}
                                        <img
                                            src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                            alt="star"
                                            width={74}
                                            height={70}
                                            className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                                        />
                                    </span>
                                </h2>
                                <p className="mt-4 text-lg lg:text-xl">{servicesData.subtitle}</p>
                            </div>

                            <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                {servicesData.services.map((service, idx) => (
                                    <li key={idx} className="jos group" data-jos_delay={idx * 0.3}>
                                        <div className="shadow-bg group h-full">
                                            <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                                                <img
                                                    src={`/assets/img/icons/${service.icon}`}
                                                    alt={service.title}
                                                    className="h-[70px] w-auto"
                                                />
                                                <h4 className="mb-[15px] mt-[30px]">{service.title}</h4>
                                                <p className="mb-7">{service.description}</p>
                                                <a
                                                    // href="/service-details"
                                                    className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                                                >
                                                    <img
                                                        src="/assets/img/icons/icon-black-arrow-right.svg"
                                                        alt="arrow"
                                                        width={34}
                                                        height={28}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceSection
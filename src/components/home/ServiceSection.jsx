import React from 'react'
import services from '@/utils/services'
import Link from 'next/link'

const ServiceSection = ({ servicePage = false }) => {
    return (
        <>
            <section className="section-service" id='services'>
                <div className="bg-colorIvory">
                    <div className="section-space">
                        <div className="container">
                            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                                <h2 className="jos">
                                    Fajraan Tech Services{' '}
                                    <span>

                                        <img
                                            src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                            alt="star"
                                            width={74}
                                            height={70}
                                            className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                                        />
                                    </span>
                                </h2>
                                <p className="mt-4 text-lg lg:text-xl">End-to-end technology solutions to empower businesses across the Middle East and beyond.</p>
                            </div>

                            <ul className={`grid grid-cols-1 gap-[30px] ${servicePage ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                                {services.map((service, idx) => (
                                    <li key={idx} className="jos group" data-jos_delay={idx * 0.3}>
                                        <div className="shadow-bg group h-full">
                                            <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                                                <img
                                                    src={`/assets/img/icons/${service.icon}`}
                                                    alt={service.title}
                                                    className="h-[70px] w-auto"
                                                />
                                                <h4 className="mb-[15px] mt-[30px]">{service.title}</h4>
                                                <p className={`${servicePage ? "mb-4" : "mb-7"}`}>{service.description}</p>
                                                {servicePage &&
                                                    <ul className="mb-7 list-disc pl-6">
                                                        {service.subServices.map(item => (
                                                            <li>{item.title}</li>
                                                        ))}
                                                    </ul>
                                                }
                                                <Link
                                                    href={`/services/${service.slug}`}
                                                    className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                                                >
                                                    <img
                                                        src="/assets/img/icons/icon-black-arrow-right.svg"
                                                        alt="arrow"
                                                        width={34}
                                                        height={28}
                                                    />
                                                </Link>
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
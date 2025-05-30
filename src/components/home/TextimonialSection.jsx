import React from 'react'

const testimonials = [
    {
        rating: 5,
        title: "Exceptional Support and Delivery",
        content:
            "Muaaz and his team delivered our web app ahead of schedule with excellent code quality and clear communication. Their professionalism made the whole process seamless.",
        user: {
            name: "Omar Al-Farsi",
            role: "Startup Founder",
        },
        avatar: "assets/img/images/th-1/testimonial-user-img-1.png",
    },
    {
        rating: 5,
        title: "Highly Skilled Developer",
        content:
            "Working with Muaaz brought our ideas to life with clean, scalable code. The custom web applications he built exceeded our expectations in both performance and design.",
        user: {
            name: "Layla Hassan",
            role: "Product Manager",
        },
        avatar: "assets/img/images/th-1/testimonial-user-img-2.png",
    },
    {
        rating: 5,
        title: "Reliable and Innovative",
        content:
            "Muaaz consistently demonstrated deep technical expertise and innovative solutions, making complex development challenges look easy. Highly recommended for MERN projects.",
        user: {
            name: "Faisal Al-Mansoori",
            role: "Tech Lead",
        },
        avatar: "assets/img/images/th-1/testimonial-user-img-3.png",
    },
    {
        rating: 5,
        title: "Transformative Development Experience",
        content:
            "Our collaboration with Muaaz transformed our product vision into a fully functional platform. His attention to detail and fast turnaround times were impressive.",
        user: {
            name: "Noura Al-Sayed",
            role: "CEO",
        },
        avatar: "assets/img/images/th-1/testimonial-user-img-4.png",
    },
];

const StarIcon = () => (
    <img
        src="assets/img/icons/icon-black-star.svg"
        alt="star"
        width="37"
        height="35"
    />
);
const TextimonialSection = () => {


    return (
        <>
            <section className="section-testimonial bg-white">
                <div className="section-space">
                    <div className="container">
                        <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                            <h2 className="jos">
                                Clients are always satisfied with
                                <span>
                                    {" "}
                                    us
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

                        <ul className="grid grid-cols-1 gap-x-6 gap-y-[30px] md:grid-cols-2">
                            {testimonials.map((item, i) => (
                                <li className="jos" key={i} data-jos_delay={`${i * 0.3}`}>
                                    <div className="flex h-full flex-col rounded-[20px] border-2 border-black px-[30px] py-6 transition-all duration-300 hover:shadow-[5px_5px_0_0] hover:shadow-black">
                                        <div className="mb-8 flex gap-x-2">
                                            {[...Array(item.rating)].map((_, idx) => (
                                                <StarIcon key={idx} />
                                            ))}
                                        </div>
                                        <h4 className="mb-5">{item.title}</h4>
                                        <p className="mb-[30px]">{item.content}</p>
                                        <div className="mt-auto flex items-center gap-3">
                                            <div className="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black">
                                                <img
                                                    src={item.avatar}
                                                    alt={`${item.user.name} avatar`}
                                                    width="64"
                                                    height="64"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]">
                                                {item.user.name}
                                                <span className="font-normal"> {item.user.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TextimonialSection
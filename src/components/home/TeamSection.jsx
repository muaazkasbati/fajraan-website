import React from 'react';

const teamData = [
    {
        name: 'Muaaz Kasbati',
        role: 'CEO & Founder',
        image: '/assets/img/new/image-coo-1.jpg',
        'twitter': 'http://www.twitter.com/muaazkasbati',
        'facebook': 'https://www.facebook.com/muaazkasbati',
        'instagram': 'https://www.instagram.com/muaazkasbati',
        'linkedin': 'https://www.linkedin.com/in/muaazkasbati',
    },
    {
        name: 'Ayesha Kasbati',
        role: 'COO',
        image: '/assets/img/new/image-coo-2.jpg',
        // 'twitter': 'http://www.twitter.com/',
        // 'facebook': 'http://www.facebook.com/',
        // 'instagram': 'http://www.instagram.com/',
        'linkedin': 'https://www.linkedin.com/in/ayesha-kasbati',
    },
    // {
    //     name: 'Talha Ahmed',
    //     role: 'Co-Founder',
    //     image: '/assets/img/images/th-1/team-img-3.jpg',
    //     // 'twitter': 'http://www.twitter.com/',
    //     // 'facebook': 'http://www.facebook.com/',
    //     // 'instagram': 'http://www.instagram.com/',
    //     // 'linkedin': 'http://www.linkedin.com/',
    // },
    // {
    //     name: 'Adam Straw',
    //     role: 'Web Developer',
    //     image: '/assets/img/images/th-1/team-img-4.jpg',
    //     'twitter': 'http://www.twitter.com/' },
    //     'facebook': 'http://www.facebook.com/',
    //     'instagram': 'http://www.instagram.com/',
    //     'linkedin': 'http://www.linkedin.com/',
    // },
];

const TeamSection = () => {
    return (
        <section className="section-team bg-white">
            <div className="section-space">
                <div className="container">
                    <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                        <h2 className="jos">
                            We are a Team of {" "}
                            <span>
                                Creative Minds {" "}
                                <img
                                    src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                    alt="decorative star"
                                    width="74"
                                    height="70"
                                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                                />
                            </span>
                        </h2>

                    </div>

                    {/* <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
                    <ul style={{ placeContent: "center", placeSelf: "center" }} className="grid place-items-center md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 ">

                        {teamData.map((member, index) => (
                            <li
                                style={{ placeSelf: "center" }}
                                key={index}
                                className="jos group/team-item w-[300px]"
                                data-jos_delay="0"
                                data-jos_animation="flip-left"
                            >
                                <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                                    <img
                                        src={member.image}
                                        alt="team-img-1"
                                        width="296"
                                        height="300"
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110"
                                        style={{ maxHeight: "300px", objectFit: "cover" }}
                                    />
                                    <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                                        {member.twitter &&
                                            <a
                                                href={member.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-white bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-white"
                                            >
                                                <img
                                                    src="assets/img/icons/icon-logo-buttery-white-twitter.svg"
                                                    alt="icon-logo-buttery-white-twitter"
                                                    width="19"
                                                    height="16"
                                                    className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                                                />
                                                <img
                                                    src="assets/img/icons/icon-logo-black-twitter.svg"
                                                    alt="icon-logo-black-twitter"
                                                    width="19"
                                                    height="16"
                                                    className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                                                />
                                            </a>
                                        }
                                        {member.facebook &&
                                            <a
                                                href={member.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-white bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-white"
                                            >
                                                <img
                                                    src="assets/img/icons/icon-logo-buttery-white-facebook.svg"
                                                    alt="icon-logo-buttery-white-facebook"
                                                    width="10"
                                                    height="17"
                                                    className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                                                />
                                                <img
                                                    src="assets/img/icons/icon-logo-black-facebook.svg"
                                                    alt="icon-logo-black-facebook"
                                                    width="10"
                                                    height="17"
                                                    className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                                                />
                                            </a>
                                        }
                                        {member.instagram &&
                                            <a
                                                href={member.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-white bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-white"
                                            >
                                                <img
                                                    src="assets/img/icons/icon-logo-buttery-white-instagram.svg"
                                                    alt="icon-logo-buttery-white-instagram"
                                                    width="17"
                                                    height="18"
                                                    className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                                                />
                                                <img
                                                    src="assets/img/icons/icon-logo-black-instagram.svg"
                                                    alt="icon-logo-black-instagram"
                                                    width="17"
                                                    height="18"
                                                    className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                                                />
                                            </a>
                                        }
                                        {member.linkedin &&
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-white bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-white"
                                            >
                                                <img
                                                    src="assets/img/icons/icon-logo-buttery-white-linkedin.svg"
                                                    alt="icon-logo-buttery-white-linkedin"
                                                    width="17"
                                                    height="18"
                                                    className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                                                />
                                                <img
                                                    src="assets/img/icons/icon-logo-black-linkedin.svg"
                                                    alt="icon-logo-black-linkedin"
                                                    width="17"
                                                    height="18"
                                                    className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                                                />
                                            </a>
                                        }
                                    </div>
                                </div>

                                <div className="mt-5 text-center">
                                    <a
                                        href="team-details.html"
                                        className="display-heading display-heading-4 mb-4 block"
                                    >
                                        {member.name}
                                    </a>
                                    <span className="text-lg md:text-[21px]">{member.role}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
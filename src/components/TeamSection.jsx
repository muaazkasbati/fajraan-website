import React from 'react';
import { motion } from "framer-motion";

const teamData = [
    {
        name: 'Muaaz Kasbati',
        role: 'CEO & Founder',
        image: '/images/team/team-1.jpg',
        'twitter': 'http://www.twitter.com/muaazkasbati',
        'facebook': 'https://www.facebook.com/muaazkasbati',
        'instagram': 'https://www.instagram.com/muaazkasbati',
        'linkedin': 'https://www.linkedin.com/in/muaazkasbati',
    },
    {
        name: 'Ayesha Kasbati',
        role: 'COO',
        image: '/images/team/team-2.jpg',
        // 'twitter': 'http://www.twitter.com/',
        // 'facebook': 'http://www.facebook.com/',
        // 'instagram': 'http://www.instagram.com/',
        'linkedin': 'https://www.linkedin.com/in/ayesha-kasbati',
    },
    {
        name: 'Talha Ahmed',
        role: 'Co-Founder',
        image: '/images/team/team-3.jpg',
        // 'twitter': 'http://www.twitter.com/',
        // 'facebook': 'http://www.facebook.com/',
        // 'instagram': 'http://www.instagram.com/',
        'linkedin': 'https://www.linkedin.com/in/talha-ahmed-0abb82233',
    },
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
        <section className="quanto-team-area section-padding-bottom">
            <div className="container custom-container">
                {/* Header Row */}
                <div className="row gx-4 gy-2 align-items-end">
                    <div className="col-md-12">
                        <motion.div
                            className="quanto__header"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h3 className="title text-center text-md-start color-primary">
                                We are a Team of Creative Minds
                            </h3>
                        </motion.div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="row g-4 g-sm-3 g-md-4 row-padding-top">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={index}
                            className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="quanto-team-box">
                                <figure className="team-thumb">
                                    <img
                                        loading="lazy"
                                        decoding="async"
                                        className="w-100"
                                        src={member.image}
                                        alt={member.name}
                                        style={{ color: "transparent", height:'466px', objectFit:'cover' }}
                                    />
                                    <img
                                        loading="lazy"
                                        decoding="async"
                                        className="w-100"
                                        src={member.image}
                                        alt={member.name}
                                        style={{ color: "transparent", height:'466px', objectFit:'cover' }}
                                    />
                                    <ul className="custom-ul">
                                        {member.facebook && (
                                            <li>
                                                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                            </li>
                                        )}
                                        {member.twitter && (
                                            <li>
                                                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                            </li>
                                        )}
                                        {member.instagram && (
                                            <li>
                                                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </li>
                                        )}
                                        {member.linkedin && (
                                            <li>
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </li>
                                        )}
                                        {/* <li>
                                            <a href="#">
                                                <i className="fa-brands fa-x-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </a>
                                        </li> */}
                                    </ul>
                                </figure>
                                <div className="team-content">
                                    <h6 className="team-data-name">
                                        <a href="/team-details">{member.name}</a>
                                    </h6>
                                    <span className="team-data-position">{member.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
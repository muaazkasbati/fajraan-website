import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';


const teamData = [
    {
        name: 'Muaaz Kasbati',
        role: 'CEO & Founder',
        image: '/images/team/team-1.webp',
        'twitter': 'http://www.twitter.com/muaazkasbati',
        'facebook': 'https://www.facebook.com/muaazkasbati',
        'instagram': 'https://www.instagram.com/muaazkasbati',
        'linkedin': 'https://www.linkedin.com/in/muaazkasbati',
    },
    {
        name: 'Ayesha Kasbati',
        role: 'COO',
        image: '/images/team/team-2.webp',
        // 'twitter': 'http://www.twitter.com/',
        // 'facebook': 'http://www.facebook.com/',
        // 'instagram': 'http://www.instagram.com/',
        'linkedin': 'https://www.linkedin.com/in/ayesha-kasbati',
    },
    {
        name: 'Talha Ahmed',
        role: 'Co-Founder',
        image: '/images/team/team-3.webp',
        // 'twitter': 'http://www.twitter.com/',
        // 'facebook': 'http://www.facebook.com/',
        // 'instagram': 'http://www.instagram.com/',
        'linkedin': 'https://www.linkedin.com/in/talha-ahmed-0abb82233',
    },
    // {
    //     name: 'Adam Straw',
    //     role: 'Web Developer',
    //     image: '/assets/img/images/th-1/team-img-4.webp',
    //     'twitter': 'http://www.twitter.com/' },
    //     'facebook': 'http://www.facebook.com/',
    //     'instagram': 'http://www.instagram.com/',
    //     'linkedin': 'http://www.linkedin.com/',
    // },
];

const TeamSection = () => {
    return (
        <section className="quanto-team-area section-padding-bottom">
            <div className="container mx-auto px-4 custom-container">
                {/* Header Row */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 items-end">
                    <div className="w-full">
                        <motion.div
                            className="quanto__header"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h3 className="title text-center md:text-left color-primary">
                                We are a Team of Creative Minds
                            </h3>
                        </motion.div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="grid gap-6 row-padding-top sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={index}
                            className="w-full"
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
                                        className="w-full"
                                        src={member.image}
                                        alt={member.name}
                                        style={{ color: "transparent", height: '466px', objectFit: 'cover' }}
                                    />
                                    <img
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full"
                                        src={member.image}
                                        alt={member.name}
                                        style={{ color: "transparent", height: '466px', objectFit: 'cover' }}
                                    />
                                    <ul className="custom-ul">
                                        {member.facebook && (
                                            <li>
                                                <Link aria-label="Follow on Facebook" href={member.facebook} target="_blank" rel="noopener noreferrer">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        )}

                                        {member.twitter && (
                                            <li>
                                                <Link aria-label="Follow on X" href={member.twitter} target="_blank" rel="noopener noreferrer">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.1L6.6 22H3.5l7.3-8.4L1 2h6.3l4.4 5.5L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        )}

                                        {member.instagram && (
                                            <li>
                                                <Link aria-label="Follow on Instagram" href={member.instagram} target="_blank" rel="noopener noreferrer">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        )}

                                        {member.linkedin && (
                                            <li>
                                                <Link aria-label="Follow on LinkedIn" href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8a2.5 2.5 0 0 0-.02-4.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2.1 3.9-2.1 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4V9z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </figure>
                                <div className="team-content">
                                    <h6 className="team-data-name">
                                        <span>{member.name}</span>
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
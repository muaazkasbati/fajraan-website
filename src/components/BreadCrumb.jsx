// import React from 'react'

// const BreadCrumb = ({ page }) => {
//     return (
//         <>
//             <section class="section-breadcrumb">
//                 <div class="bg-gradient-to-b from-[#092a54] via-[#092a54] to-[#00839f]">
//                     <div class="breadcrumb-space">
//                         <div class="container">
//                             <div class="breadcrumb-block">
//                                 <h1>{page}</h1>
//                                 <ul class="breadcrumb-nav">
//                                     <li><a href="/">Home</a></li>
//                                     <li>{page}</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default BreadCrumb

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BreadCrumb = ({ page }) => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(segment => segment && segment !== '#');

    const capitalize = (str) => {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
    };

    const breadcrumbs = [
        { name: 'Home', path: '/' },
        ...pathSegments?.map((segment, index) => {
            const path = `/${pathSegments?.slice(0, index + 1).join('/')}`;
            return {
                name: capitalize(segment),
                path,
            };
        }),
    ];

    if (page) {
        breadcrumbs[breadcrumbs?.length - 1].name = page;
    }

    return (
        <section className="section-breadcrumb">
            <div className="bg-gradient-to-b from-[#092a54] via-[#092a54] to-[#00839f]">
                <div className="breadcrumb-space">
                    <div className="container">
                        <div className="breadcrumb-block">
                            <h1>{page || capitalize(pathSegments[pathSegments?.length - 1]) || 'Home'}</h1>
                            <ul className="breadcrumb-nav">
                                {breadcrumbs?.map((crumb, index) => (
                                    <li key={index}>
                                        {index === breadcrumbs?.length - 1 ? (
                                            <span>{crumb?.name}</span>
                                        ) : (
                                            <a href={crumb?.path}>
                                                {crumb?.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadCrumb;
import React from 'react'

const BreadCrumb = ({ page }) => {
    return (
        <>
            <section class="section-breadcrumb">
                <div class="bg-black">

                    <div class="breadcrumb-space">

                        <div class="container">
                            <div class="breadcrumb-block">
                                <h1>{page}</h1>

                                <ul class="breadcrumb-nav">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>{page}</li>
                                </ul>

                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default BreadCrumb
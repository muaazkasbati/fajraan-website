import React from 'react'

const FaqsSection = () => {
    return (
        <>
            <section class="section-faq">

                <div class="section-space">

                    <div class="container">
                        <div class="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                            <h2 class="jos">
                                These FAQs help
                                <span>
                                    <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                                </span>
                                clients learn about us
                            </h2>
                        </div>

                        <div class="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
                            <ul class="flex flex-col gap-y-10">
                                <li class="jos flex flex-col gap-y-4">
                                    <h4 class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                                        What services does agency offer?
                                    </h4>

                                    <div class="ml-10 text-[#0C0C0C]">
                                        <p>
                                            Clients often seek to understand the range of design
                                            services an agency provides, such as graphic design, web
                                            design, branding.
                                        </p>
                                    </div>

                                </li>

                                <li class="jos flex flex-col gap-y-4">
                                    <h4 class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                                        What is your design process like?
                                    </h4>

                                    <div class="ml-10 text-[#0C0C0C]">
                                        <p>
                                            Explaining the design agency's process from initial
                                            concept to final delivery helps clients understand what
                                            to expect.
                                        </p>
                                    </div>

                                </li>

                                <li class="jos flex flex-col gap-y-4">
                                    <h4 class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                                        How much does design work cost?
                                    </h4>

                                    <div class="ml-10 text-[#0C0C0C]">
                                        <p>
                                            The cost of our design services varies depending on the
                                            scope of the project. We provide customized quotes after
                                            discussing requirements.
                                        </p>
                                    </div>

                                </li>
                            </ul>

                            <ul class="flex flex-col gap-y-10">
                                <li class="jos flex flex-col gap-y-4">
                                    <h4 class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                                        What's your design process like?
                                    </h4>

                                    <div class="ml-10 text-[#0C0C0C]">
                                        <p>
                                            Our design process typically involves discovery, concept
                                            development, design, revisions based on feedback, and
                                            finalization.
                                        </p>
                                    </div>

                                </li>

                                <li class="jos flex flex-col gap-y-4">
                                    <h4 class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                                        How do you handle user feedback?
                                    </h4>

                                    <div class="ml-10 text-[#0C0C0C]">
                                        <p>
                                            We value client feedback and work closely with you to
                                            make sure user happy with the final design. We offer a
                                            specific number of revisions.
                                        </p>
                                    </div>
                                </li>
                                <li class="jos flex flex-col gap-y-4">
                                    <h4 class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]">
                                        Can we see samples of your work?
                                    </h4>
                                    <div class="ml-10 text-[#0C0C0C]">
                                        <p>
                                            Yes, we're proud to showcase a portfolio of our previous
                                            projects. You can find examples of our work on our
                                            website or view our portfolio.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqsSection
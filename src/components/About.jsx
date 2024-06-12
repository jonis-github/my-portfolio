function About() {
    return(
        <>
            <section
                id="about"
                className="bg-white dark:bg-slate-800 dark:text-white"
            >
                <div className="container md:w-[70%] sm:py-16 py-10">
                    <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
                        <div className="relative font-bold">
                            <div className="text-center text-6xl text-black/5 xl:text-8xl dark:text-white/5">ABOUT</div>

                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-4xl">About me</h1>
                        </div>

                        <div className="text-slate-500">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam quisquam eos soluta ut odio magni pariatur illo nisi deleniti.
                            </p>
                            
                            <br />

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consectetur.
                            </p>

                            <div>
                                <a 
                                    href="#"
                                    className="primary-btn inline-block my-6 mr-6"
                                >
                                    Download Resume
                                </a>

                                <a 
                                    href="#"
                                    className="outline-btn inline-block"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { About }
import person2 from "../assets/person2.png"

function Hero() {
    return(
        <>
            <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
                <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
                    <div>
                        <div className="space-y-2 grid text-center justify-items-center sm:justify-items-start sm:text-left">
                            <p className="uppercase">Hello</p>

                            <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                                I'm Jonis Daclag
                            </p>

                            <p className="text-3xl text-gray-700 dark:text-white">
                                {/* Aspiring Web & <br />Full Stack Developer */}
                                This webapp is a sample project 
                                <br />
                                Here is the original video <a href="https://www.youtube.com/watch?v=-u8SQCEe-dQ" className="text-primary">link</a>
                                <br/> Credit to "The Coding Journey"
                            </p>

                            <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ad itaque veniam exercitationem asperiores quidem nostrum ex voluptatum fugiat. Voluptate, nostrum molestias vitae nobis odit error perspiciatis sapiente doloremque neque?
                            </p>

                            <a 
                                href="mailto:abc@gmail.com"
                                className="inline-block primary-btn !px-6"
                            >
                                Hire me
                            </a>

                           
                        </div>
                    </div>

                    {/* image container */}
                    <div>
                        <img 
                            src={ person2 } 
                            alt="Image not found" 
                            className="w-full mx-auto md:max-w-lg"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export { Hero }
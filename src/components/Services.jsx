import { ServicesBox } from "."

function Services() {
    return(
        <>
            <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
                <div className="container flex flex-col items-center">
                    <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">Services</h1>
                    <p className="text-slate-500 text-center md:w-[50%] mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eligendi ut explicabo repudiandae non nostrum et consequatur magnam porro culpa maiores distinctio, dolor deleniti ipsam deserunt est rerum nihil esse.
                    </p>
                </div>

                {/* services card */}
                <div>
                    <ServicesBox />
                </div>
            </section>
        </>
    )
}

export { Services }
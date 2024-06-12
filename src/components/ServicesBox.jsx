import { AiFillLayout } from "react-icons/ai"
import { MdOutlinePhoneAndroid, MdSecurity } from "react-icons/md"
import { HiMiniComputerDesktop } from "react-icons/hi2" 

const services = [
    {
        name: "UX research",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis at dignissimos numquam ut commodi consectetur dicta dolorum, deleniti facere atque error, iste eum quas cumque ex libero fugiat omnis.",
        image: "https://picsum.photos/200/300",
        icon: <AiFillLayout className="text-4xl" />,
        bgColor: "bg-blue-500/70"
    },
    {
        name: "App Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis at dignissimos numquam ut commodi consectetur dicta dolorum, deleniti facere atque error, iste eum quas cumque ex libero fugiat omnis.",
        image: "https://picsum.photos/200/301",
        icon: <MdOutlinePhoneAndroid className="text-4xl" />,
        bgColor: "bg-lime-500/70"
    },
    {
        name: "Web App Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis at dignissimos numquam ut commodi consectetur dicta dolorum, deleniti facere atque error, iste eum quas cumque ex libero fugiat omnis.",
        image: "https://picsum.photos/200/302",
        icon: <HiMiniComputerDesktop className="text-4xl" />,
        bgColor: "bg-fuchsia-500/70"
    },
    {
        name: "Security",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis at dignissimos numquam ut commodi consectetur dicta dolorum, deleniti facere atque error, iste eum quas cumque ex libero fugiat omnis.",
        image: "https://picsum.photos/200/303",
        icon: <MdSecurity className="text-4xl" />,
        bgColor: "bg-orange-500/70"
    },
    
]

function ServicesBox() {
    return(
        <>
            {/* <div className="grid sm:grid-cols-2 container m-auto gap-10 mt-5">
                {
                    services.map( ( data, i ) => (
                        <div key={ i } className="w-fit">
                            <div 
                                className={`opacity-90 bg-cover bg-no-repeat rounded-3xl dark:border-gray-400 dark:border`}
                                style={ { backgroundImage: `url(${ data.image })` } }
                                
                            >
                                <div className={ `${data.bgColor} p-5 rounded-3xl` }>
                                    <div className="">{ data.icon }</div>
                                    <div>{ data.name }</div>
                                    <div>{ data.description }</div>
                                </div>
                            </div>
                        </div>
                    ) )
                }
            </div> */}

            <section id="services" className="container my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {
                        services.map( ( { name, description, image, icon, bgColor }, i ) => (
                            <div 
                                key={ i }
                                style={ { backgroundImage: `url( ${ image } )` } }
                                className={ `${ bgColor } rounded-xl txt-white bg-cover bg-center bg-no-repeat bg-blend-overlay` }
                            >
                                <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
                                    { icon }
                                    <h1 className="text-2xl font-bold">{ name }</h1>
                                    <p>{ description }</p>
                                </div>
                            </div>
                        ) )   
                    }
                </div>
            </section>
        </>
    )
}

export { ServicesBox }
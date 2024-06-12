import { useEffect, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { BiSolidMoon, BiSolidSun } from "react-icons/bi"

function Navbar() {
    const [ showMenu, setShowMenu ] =  useState( false )
    const [ theme, setTheme ] = useState( localStorage.getItem( "theme") ? localStorage.getItem( "theme" ) : "light" )
    const element = document.documentElement
    
    const navMenus = [
        { name: "Home", link: "/#home" },
        { name: "About", link: "/#about" },
        { name: "Services", link: "/#services" },
        { name: "Contact", link: "#" },
    ]

    const toggleMenu = () => {
        setShowMenu( !showMenu )
    }

    useEffect( () => {
        if( theme === "dark" ) {
            element.classList.add( "dark" )
            localStorage.setItem( "theme", "dark" )
        } else {
            element.classList.remove( "dark" )
            localStorage.setItem( "theme", "light" )
        }
        
    }, [ theme ] )

    return(
        <div className="sticky top-0 z-50">
            <nav className="bg-secondary dark:bg-gray-900 dark:text-white border-b-2 dark:border-b-secondary/5">
                <div className="container flex justify-between items-center py-3 sm:py-0 ">
                    <h1 className="text-3xl text-primary">Portfolio</h1>

                    {/* desktop menu */}
                    <div className="hidden sm:block">
                        <ul className="flex items-center gap-4">
                            {
                                navMenus.map( ( menu, i ) => (
                                    <li key={ i }>
                                        <a 
                                            href={ menu.link } 
                                            className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                                        >{ menu.name }</a>
                                    </li>
                                ) )
                            }

                            {/* themes */}
                            {
                                theme === "dark" ? (
                                    <BiSolidSun 
                                        className="text-2xl cursor-pointer dark:text-white" 
                                        onClick={ () => setTheme( "light" ) }
                                    />
                                ) 
                                :
                                (

                                    <BiSolidMoon 
                                        className="text-2xl cursor-pointer dark:text-white"
                                        onClick={ () => setTheme( "dark" ) }
                                    />
                                )
                            }
                        </ul>
                    </div>

                    {/* mobile menu */}
                    <div className="block sm:hidden">
                        <div className="flex items-center gap-4"> 
                            {/* themes */}
                            {
                                theme === "dark" ? (
                                    <BiSolidSun 
                                        className="text-2xl cursor-pointer dark:text-white" 
                                        onClick={ () => setTheme( "light" ) }
                                    />
                                ) 
                                :
                                (

                                    <BiSolidMoon 
                                        className="text-2xl cursor-pointer dark:text-white"
                                        onClick={ () => setTheme( "dark" ) }
                                    />
                                )
                            }
                            
                            <FiMenu 
                                className="text-2xl cursor-pointer dark:text-white"
                                onClick={ toggleMenu } 
                            />
                        </div>
                        {
                            
                            showMenu && (
                                <div className="fixed top-[60px] left-0 right-0 bg-white shadow-md rounded-b-xl z-10 py-10 dark:bg-gray-900 dark:text-white">
                                    <ul className="flex flex-col items-center gap-4">
                                        { 
                                            navMenus.map( ( menu, i ) => (
                                                <li key={ i }>
                                                    <a 
                                                        href={ menu.link }
                                                        className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                                                    >
                                                        { menu.name }
                                                    </a>
                                                </li>
                                            ) ) 
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export { Navbar }
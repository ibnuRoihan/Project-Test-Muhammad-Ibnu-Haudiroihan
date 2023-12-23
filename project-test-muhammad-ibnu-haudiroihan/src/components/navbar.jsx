import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const navigation = [
    { name: 'Work', href: '/work', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Ideas', href: '/ideas', current: false },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Contacts', href: '/contacts', current: false },
]

export const Navbar = () => {
    const [prevScroll, setPrevScroll] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const navbar = document.querySelector('.nav');

            if(prevScroll > currentScroll) {
                navbar.style.top = '0';
                // navbar.style.backgroundColor = 'rgba(255, 104, 0, 0.7)';
                navbar.classList.remove('bg-opacity-70');
            } else {
                navbar.style.top = '-64px';
                navbar.classList.add('bg-opacity-70');
            }
            setPrevScroll(currentScroll);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScroll]);

    return (
        <nav id="navbar" className="nav bg-primary z-50 w-full fixed top-0 shadow-md transition-all ease-in-out duration-300">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative flex h-16 mx-12 items-center justify-between">
                    <div>
                        <Link to={"/"}>
                            <div class="flex flex-shrink-0 items-center">
                                <img class="h-10 w-auto" src="https://suitmedia.com/_nuxt/img/logo-white.081d3ce.png" alt="Your Company" />
                            </div>
                        </Link>

                    </div>
                    <div>
                        <ul className="flex space-x-5">
                        {navigation.map((item) => (
                            <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-bold text-white text-lg underline underline-offset-8 decoration-[4px] decoration-white "
                                        : "text-lg text-white font-medium cursor-pointer hover:text-gray-500"
                                }
                            >
                                <li>{item.name}</li>
                            </NavLink>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
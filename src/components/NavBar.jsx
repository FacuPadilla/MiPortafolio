import React, { useState, useEffect } from 'react';
import { FaComputer } from "react-icons/fa6";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const scrollToSection = id => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Cerrar el menú después de hacer clic en un elemento del menú
    };

    return (
        <div>
            <nav className='flex justify-between py-10 m-auto px-10 text-lg font-medium -tracking-widest md:items-center '>
                <FaComputer className='text-6xl text-sky-600' />
                <div id="menu" className={`bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] md:flex flex-col items-start justify-around rounded-lg text-dark dark:text-white md:flex-row md:w-full md:py-0 md:h-[50px] md:bg-inherit md:dark:bg-primary ${menuOpen ? '' : 'hidden'}`}>
                    <ul className='flex h-5/6 flex-col justify-around md:flex-row md:justify-center w-full marker:'>
                        <li className='text-2xl md:px-5 hover:text-sky-600' onClick={() => scrollToSection('quien-soy')}><a href="#">About</a></li>
                        <li className=' text-2xl md:px-5 hover:text-sky-600' onClick={() => scrollToSection('experiencia')}><a href="#">Skills</a></li>
                        <li className='text-2xl  md:px-5 hover:text-sky-600' onClick={() => scrollToSection('proyectos')}><a href="#">Projects</a></li>
                        <li className='text-2xl md:px-5 hover:text-sky-600' onClick={() => scrollToSection('contactame')}><a href="#">Contact me</a></li>
                    </ul>
                    <button id='darkButton' onClick={handleChangeTheme}>
                        <i className="bi bi-moon-stars-fill text-sky-600 text-4xl"></i>
                        {theme === 'dark' ? <p>Dark</p> : <p>Light</p>}
                        
                    </button>
                </div>
                <button id="menu-button" className='absolute top-10 right-12 md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    <span className='br-1 block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]'></span>
                    <span className='br-2 block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]'></span>
                    <span className='br-3 block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]'></span>
                </button>
            </nav>
        </div>
    );
};

export default NavBar;
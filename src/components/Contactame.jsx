import { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const Contactame = () => {
    const [mostrarCartel, setMostrarCartel] = useState(false);

    const handleClick = () => {
        setMostrarCartel(true);
    };

    return (
        <div id="contactame">
            <h3 className="text-5xl text-slate-700 dark:text-white mt-12 mb-10 px-10 font-bold tracking-widest text-center">Contact me</h3>
            <section className="flex flex-col w-[90%] m-auto">
                <form action="" className="w-[90%] md:max-w-[600px] m-auto">
                    <div>
                        <input placeholder="info@ejemplo.com" type="email" name="email"
                        id="email" className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:text-black" />
                    </div>
                    <div className="py-3">
                        <input type="text" name="nombre" id="nombre" placeholder="Name"
                        className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:text-black"
                        />
                    </div>
                    <div>
                        <textarea name="msj" id="msj" rows="5" placeholder="Message"
                        className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:text-black"></textarea>
                    </div>
                    <div className="my-3">
                        <button onClick={handleClick} className="bg-sky-600 transform transition duration-500 hover:scale-105  text-white p-3 w-full rounded-lg text-xl tracking-widest">Submit</button>
                    </div>
                </form>
            </section>
            {mostrarCartel && (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg border-[2px] border-sky-500 text-center">
            <p className="text-xl text-gray-800 dark:text-white">Thanks for your interest! I will contact you soon. </p>
            <p className="text-m text-gray-800 dark:text-white">For a faster response write to me at <span className='text-sky-500'>facupadilla1904@gmail.com</span> </p>
            <div className="flex justify-center items-center my-4 text-3xl">
                <FaRegCheckCircle className='text-green-500 mr-2' />
                
            </div>
            <button onClick={() => setMostrarCartel(false)} className="bg-sky-500 text-white px-4 py-2 rounded-lg dark:bg-sky-600">Close</button>
        </div>
    </div>
)}
        </div>
    );
};

export default Contactame;
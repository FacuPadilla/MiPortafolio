const Proyectos = ()=> {
    return (
        <div id="proyectos" className="my-[80px]">
            <h3 className="text-center text-5xl text-slate-700 dark:text-white my-5 px-12 font-bold
            tracking-widest md:text-center" >MY PROJECTS</h3> 

            <section className="my-12 flex flex-col items-center justify-center w-[90%]
            m-auto lg:flex-row" >

                {/* PRIMER PROYECTO*/}
                <div className="border-1 rounded-lg  *:dark:bg-slate-800
                 m-5 transform transition  hover:scale-105">
                    <div className="bg-white">
                        <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/Screenshot%202024-05-07%20101528.png" alt=""
                        className="opacity-70 hover:opacity-100" />
                        <h4 className="font-bold my-2 ml-2">CONNECTINK - TATTOOS</h4>
                        <article className="flex justify-around">
                            <div className="flex flex-nowrap items-center mb-2">
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">HTML</span>
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">TAILWIND CSS</span>
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">JS</span>
                            </div>
                            <div className="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap p-2">
                                <a href="https://github.com/santicasalis/ConnectInk"><i className="bi bi-github px-2"></i></a>
                                <a href="https://connectink.vercel.app/"><i className="bi bi-eye px-2"></i></a>
                            </div>
                        </article>
                        
                    </div>
                    <p className="p-4 bg-white text-center mt-2 rounded-lg" >
                        <span className="font-bold">ConnectInk is the final project of the bootcamp at "Soy Henry".</span> 
The application allows tattoo artists to showcase their art, availability, and services, while clients can explore profiles, appreciate artwork, and easily and securely book appointments.
                        </p>
                </div>

                {/* SEGUNDO PROYECTO*/}

                <div className="border-1 rounded-lg  *:dark:bg-slate-800
                 m-5 transform transition  hover:scale-105">
                    <div className="bg-white ">
                        <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/NationNav.PNG" alt=""
                        className="opacity-70 hover:opacity-100" />
                        <h4 className="font-bold my-2 ml-2">NATIONNAV - PAISES</h4>
                        <article className="flex justify-around">
                            <div className="flex flex-nowrap items-center mb-2">
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">HTML</span>
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">CSS</span>
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">JS</span>
                            </div>
                            <div className="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap p-2">
                                <a href="https://github.com/FacuPadilla/PI_Countries"><i className="bi bi-github px-2"></i></a>
                                <a href=""><i className="bi bi-eye px-2"></i></a>
                            </div>
                        </article>
                        
                        
                        
                    </div>
                    <p className="p-4 text-center mt-2 rounded-lg bg-white" >
                        <span className="font-bold">NationNav - Academic experience at Henry Bootcamp. </span>
                          An app created for current country info, known for its attractive design, advanced filters, and customizable activities per country.
                        </p>
                </div>

                {/* TERCER PROYECTO*/}

                <div className="border-1 rounded-lg  *:dark:bg-slate-800
                 m-5 transform transition  hover:scale-105">
                    <div className="bg-white ">
                        <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/dashb.png" alt=""
                        className="opacity-70 hover:opacity-100" />
                        <h4 className="font-bold my-2 ml-2">FOOD DELIVERY - DASHBOARD</h4>
                        <article className="flex justify-around">
                            <div className="flex flex-nowrap items-center mb-2">
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">HTML</span>
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">TAILWINDS</span>
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">REACT</span>
                                <span className="bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">JS</span>
                            </div>
                            <div className="text-xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap p-2">
                                <a href="https://github.com/FacuPadilla/dashboard-store-1"><i className="bi bi-github px-2"></i></a>
                                <a href="https://dashboard-store-1-vert.vercel.app/"><i className="bi bi-eye px-2"></i></a>
                            </div>
                        </article>
                        
                        
                        
                    </div>
                    <p className="p-4 text-center mt-2 rounded-lg bg-white" >
                        <span className="font-bold">Food delivery - Personal project. </span>
                        
100% responsive design of a possible app dedicated to food orders and deliveries. Ensuring an optimal user experience on a wide variety of devices and screens.
                        </p>
                </div>
            </section>
            

        </div>
    )

}

export default Proyectos
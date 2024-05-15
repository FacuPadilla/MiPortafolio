import NavBar from "./components/NavBar"
import Proyectos from "./components/Projectos";
import Contactame from "./components/Contactame";
import Footer from "./components/Footer";
import React, { useState } from 'react';

function App() {

  const [selectedJob, setSelectedJob] = useState('job1'); // Estado para almacenar el ID del trabajo seleccionado

  const handleJobButtonClick = (jobId) => {
    setSelectedJob(jobId); // Actualiza el estado al ID del trabajo seleccionado
  };
  const scrollToSection = id => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Cerrar el menú después de hacer clic en un elemento del menú
};


  

  return (
    <div>
      <NavBar></NavBar>
      <main>
        <section class="my-0 flex flex-col lg:flex-row lg:h-[700px]">
          <div class="p-10 lg:[80%] lg:h-[500px] lg:self-center">
            <h1 class="text-sky-600 dark:text-sky-300 text-3xl font-bold tracking-widest leading-10">Hi, I am</h1>
            <p class="py-2 text-5xl font-bold text-slate-600 dark:text-slate-300">Facundo Jose Padilla</p>
            <p class="text-4xl font-bold text-slate-500 dark:text-slate-600"> Fullstack Developer</p>
            <p class="mt-5 text-xl">
I am a software engineer who specializes in designing and developing exceptional WEB applications.</p>
            <div class="py-6">
              <a href="" class="pr-2 text-4xl hover:text-sky-600"><i class="bi bi-twitter px-2"></i></a>
              <a href="https://www.instagram.com/facu_padilla/?next=%2F" class="pr-2 text-4xl hover:text-sky-600"><i class="bi bi-instagram px-2"></i></a>
              <a href="https://www.linkedin.com/in/facundo-padilla-60371b26a" class="pr-2 text-4xl hover:text-sky-600"><i class="bi bi-linkedin px-2"></i></a>
              <a href="https://github.com/FacuPadilla" class="pr-2 text-4xl hover:text-sky-600"><i class="bi bi-github px-2"></i></a>
            </div>
            <div class=" text-center border-2 rounded border-sky-500 p-4 w-[350px] text-lg tracking-widest hover:bg-sky-500 hover:dark:text-slate-900 ease-out duration-300">
              <button onClick={() => scrollToSection('contactame')}>CONTACT ME</button>
            </div>
            
          </div>
          <div class="my-10 w-full">
              <div class="w-[300px] h-[320px] m-auto bg-[url('https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/perfilCV.jpeg')]
               lg:bg-[url('https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/perfil_cv_posta-removebg-preview.png')]
                 bg-cover rounded-lg lg:rounded-2xl lg:w-[100%] lg:h-[70%] lg:bg-center lg:bg-no-repeat lg:bg-[length:617px_840px]"></div>
                 <section className="my-[50px]">
          {/* <h2 className=" font-bold text-center text-2xl">Languages</h2> */}
          <div className="flex text-center justify-center my-6 space-x-5">
            <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/spainFlag.png" alt="" width={'50px'}  />
            <p className="font-bold my-3 mx-2">Spanish(Native)</p>
            <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/ukFlag.png" alt="" width={'50px'}  />
            <p className="font-bold my-3 mx-2">English(Advanced)</p>
          </div>
        </section>

            </div>
        </section>
        <h2 id='experiencia' class='text-5xl text-slate-700 dark:text-white font-bold tracking-widest w-[85%] m-auto text-center pt-8 '>SKILLS</h2>
        <section class='my-12 flex flex-col w-[84%] m-auto lg:flex-row lg:w-[87%] lg:my-28' id="jobSection">
             <div class='flex justify-between lg:flex-col lg:w-[20%]'>
            <button type="button" onClick={() => handleJobButtonClick('job1')} className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700 ${selectedJob === 'job1' ? 'border-sky-500 text-sky-500' : 'border-sky-200 hover:dark:bg-slate-800 hover:bg-slate-200'}`}>JavaScript</button>
            {/* Agrega eventos onClick para los demás botones */}
            <button type='button' onClick={() => handleJobButtonClick('job2')} className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700 ${selectedJob === 'job2' ? 'border-sky-500 text-sky-500' : 'border-sky-200 hover:dark:bg-slate-800 hover:bg-slate-200'}`}>HTML</button>
            <button type='button' onClick={() => handleJobButtonClick('job3')} className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700 ${selectedJob === 'job3' ? 'border-sky-500 text-sky-500' : 'border-sky-200 hover:dark:bg-slate-800 hover:bg-slate-200'}`}>React</button>
            <button type='button' onClick={() => handleJobButtonClick('job4')} className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700 ${selectedJob === 'job4' ? 'border-sky-500 text-sky-500' : 'border-sky-200 hover:dark:bg-slate-800 hover:bg-slate-200'}`}>CSS/Tailwind CSS</button>
            <button type='button' onClick={() => handleJobButtonClick('job5')} className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700 ${selectedJob === 'job5' ? 'border-sky-500 text-sky-500' : 'border-sky-200 hover:dark:bg-slate-800 hover:bg-slate-200'}`}>SQL</button>
            <button type='button' onClick={() => handleJobButtonClick('job6')} className={`border-b-2 hover:dark:bg-slate-700 w-full px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700 ${selectedJob === 'job6' ? 'border-sky-500 text-sky-500' : 'border-sky-200 hover:dark:bg-slate-800 hover:bg-slate-200'}`}>DataBase</button>
          </div>
          <div class='my-5 lg:px-10 lg:my-0 lg:max-w-[800px]'>



          <article id='job1' className={selectedJob === 'job1' ? '' : 'hidden'}>
            <h3>Expert in <span
            class='text-sky-500 font-bold text-lg'>@JavaScript</span></h3>
            {/* <h4 class='text-sm pb-5'>Septiembre 2023 - Diciembre 2024</h4> */}
            <ul className="text-[19px] ">
              <li class='flex items-center py-2 '>
                <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>DOM manipulation: Create, modify and delete HTML elements dynamically.
                  </p>
                </li>
              <li class='flex items-center py-2 '>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Events: Handle user events such as button clicks, mouse movements, and keyboard inputs.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                AJAX and Fetch API: Make asynchronous requests to the server and handle responses.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Algorithms and data structures: Implement search, sorting algorithms and data structures such as arrays, objects, and maps.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Object-oriented programming: Create classes and objects to organize and encapsulate code.</p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Error Handling: Implement error handling using try-catch and throw.</p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Form Validation: Validate user input fields on forms.</p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                LocalStorage and SessionStorage: Store data locally in the user's browser.</p>
              </li>
            </ul>
          </article>
          {/* JOB #2 DESCRIPTION */}
          <article id='job2' className={selectedJob === 'job2' ? '' : 'hidden'}>
            <h3>Expert in <span
            class='text-sky-500 font-bold text-lg'>@HTML</span></h3>
            {/* <h4 class='text-sm pb-5'>enero 2023 - marzo 2024</h4> */}
            <ul className="text-[19px]">
              <li class='flex items-center py-2 '>
                <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>Semantics: Use semantic HTML tags to correctly structure the content. </p>
                </li>
              <li class='flex items-center py-2 '>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Forms: Create interactive forms to collect user data.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Multimedia: Incorporate images, videos and audio into the web page.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Links and anchors: Create hyperlinks and anchors for navigation within the page or to other pages.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Tables: Use tables to display tabular data in an organized way.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Lists: Create ordered and unordered lists to present information.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                External and internal links: Link to external and internal resources within the website.
                </p>
              </li>
            </ul>
          </article>
          {/* JOB #3 DESCRIPTION */}
          <article id='job3 ' className={selectedJob === 'job3' ? '' : 'hidden'}>
            <h3>Web Developer <span
            class='text-sky-500 font-bold text-lg'>@React</span></h3>
            {/* <h4 class='text-sm pb-5'>enero 2023 - marzo 2024</h4> */}
            <ul className="text-[19px]">
              <li class='flex items-center py-2 '>
                <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Development of modern and responsive web applications.
                  </p>
                </li>
              <li class='flex items-center py-2 '>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Creation of reusable components for a scalable architecture.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Implementation of routing using React Router for dynamic navigation.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Integration of external APIs to obtain and display data in the user interface. </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Use of tools such as Redux or Context API to manage the state of the application.
                </p>
              </li>
              
            </ul>
          </article>

           {/* JOB #4 DESCRIPTION */}
           <article id='job4' className={selectedJob === 'job4' ? '' : 'hidden'}>
            <h3> Expert in  <span
            class='text-sky-500 font-bold text-lg'>@CSS/Tailwind</span></h3>
            {/* <h4 class='text-sm pb-5'>enero 2017 - marzo 2022</h4> */}
            <ul className="text-[19px]">
              <li class='flex items-center py-2 '>
                <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>Design and stylization of attractive and functional user interfaces.
                  </p>
                </li>
              <li class='flex items-center py-2 '>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Using responsive design techniques to ensure a consistent experience across devices.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Implementation of animations and transitions to improve interactivity.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Application of visual design principles to improve usability and accessibility.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Style optimization to improve performance and page loading.
                </p>
              </li>
            </ul>
          </article>

          {/* JOB #5 DESCRIPTION */}
          <article id='job5' className={selectedJob === 'job5' ? '' : 'hidden'}>
            <h3> Expert in  <span
            class='text-sky-500 font-bold text-lg'>@SQL</span></h3>
            {/* <h4 class='text-sm pb-5'>enero 2017 - marzo 2022</h4> */}
            <ul className="text-[19px]">
              <li class='flex items-center py-2 '>
                <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>Creation and management of relational databases to store and manipulate data.
                  </p>
                </li>
              <li class='flex items-center py-2 '>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Advanced queries to extract specific information from large data sets.
                </p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Query optimization to improve the performance of database operations.</p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Design of standardized database schemas to ensure data integrity.</p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Implementation of stored procedures, functions and triggers to automate tasks.</p>
              </li>
            </ul>
          </article>

          {/* JOB #6 DESCRIPTION */}
          <article id='job6' className={selectedJob === 'job6' ? '' : 'hidden'}>
            <h3> Expert in  <span
            class='text-sky-500 font-bold text-lg'>@Database</span></h3>
            {/* <h4 class='text-sm pb-5'>enero 2017 - marzo 2022</h4> */}
            <ul className="text-[19px]">
              <li class='flex items-center py-2 '>
                <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>Selection of appropriate database technology based on project requirements (e.g. MySQL, PostgreSQL).
                  </p>
                </li>
              <li class='flex items-center py-2 '>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Configuration and installation of database management systems.</p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Backing up and restoring databases to ensure data availability.</p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Monitoring and adjustment of performance parameters to optimize system operation.Monitoring and adjustment of performance parameters to optimize system operation.</p>
              </li>
              <li class='flex items-center py-2'>
              <span class='pr-2 text-sky-500 font-black'>&#9655;</span>
                <p class='text-stone-900 dark:text-cyan-50 font-normal px-5'>
                Implementation of security measures to protect confidential data.</p>
              </li>
            </ul>
          </article>
          
          </div>
          
        </section>
        <section className="flex justify-center ">
          <div >
            <ul className="flex lg:items-center md:space-x-[40px] lg:space-x-[80px] space-x-4">

              <li>
                <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/css%20icon.png" alt="" width={'50px'}/>
                <p className="text-center mt-2 font-bold">CSS</p>
                </li>
              <li>
                <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/github%20icon.png" alt="" width={'50px'} />
                <p className="text-center mt-2 font-bold">GitHub</p>
                </li>
              <li>
                <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/html%20icon.png" alt="" width={'50px'} />
                <p className="text-center mt-2 font-bold">HTML</p>
                </li>
              <li>
                <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/js%20icon.png" alt="" width={'50px'} />
                <p className="text-center mt-2 font-bold">JS</p>
                </li>
              <li>
                <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/next%20icon.png" alt="" width={'50px'} />
                <p className="text-center mt-2 font-bold">Next.js</p>
                </li>
              <li>
                <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/nodejs%20icon.png" alt="" width={'50px'} />
                <p className="text-center mt-2 font-bold">Node.js</p>
                </li>
              <li>
                <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/postgre%20icon.png" alt="" width={'50px'} />
                <p className="text-center mt-2 font-bold">Postgre</p>
                </li>
              <li>
                <img src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/react%20icon.png" alt="" width={'50px'} />
                <p className="text-center mt-2 font-bold">React</p>
                </li>
            </ul>
          </div>
          
        </section>
        
       <Proyectos></Proyectos>
       <Contactame></Contactame>
       <Footer></Footer>
      </main>
    </div>
  )
}

export default App

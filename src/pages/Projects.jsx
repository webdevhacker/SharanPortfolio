import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
// import { ProjectImg } from "../components";
import { Img1 } from "../assets/images"
import { Img2 } from "../assets/images"
import { Img3 } from "../assets/images"
import { Img4 } from "../assets/images"
import { Img5 } from "../assets/images"


const Projects = () => {
  return (
    <section className='max-container -mt-16'>
      <h1 className='head-text'>
        Blog application using{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          DJango
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        This blog application is built with the help of python django framework. It is simple application to understand the functionality of Django framework for web development. Its vision is to provide high secured Contant Management System(CMS).
      </p><br />
      <ul className="subheading-text">
        Technology used:
          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#00c6ff]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Python programming with Django framework
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#00c6ff]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Virtual Private Server (VPS), apache2 server with ubuntu
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#00c6ff]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Hyper Text Markup Language(HTML)
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#00c6ff]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Cascade Style Sheet (CSS)
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#00c6ff]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Javascript (JS)
            </p>
          </li>
      </ul><br />

      <ul className="subheading-text">
        Features I added to this web application:
          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#f509d6]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              User registration, login and reset password
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#f509d6]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Post restriction for specific users
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#f509d6]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Email confirmation link for new registration
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#f509d6]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Soon after login to the account an email sent to the user with device information and the place of login based on IP Address
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#f509d6]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Password reset link with requested IP Address
            </p>
          </li>

          <li className="flex items-start lg:col-span-1">
            <svg className="w-5 h-5 text-[#f509d6]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            <p className="ml-3 leading-5 text-slate-500">
              Password changed email to the user with device information and the place of password reset done based on IP Address
            </p>
          </li>
      </ul> <br />

      {/* Image grid of project portfolio */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={ Img1 }/>

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={ Img2 }/>

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                  <img src={ Img3 }/>

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={ Img4 }/>

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={ Img5 }/>

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
            </a>
        </div>



      
      {/* <ProCarousel /> */}
      {/* <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;

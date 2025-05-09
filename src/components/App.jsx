import { useState } from "react";
import { projects } from "../projects";
import { Link } from "react-router-dom";

export default function App() {
  const [tab, setTab] = useState("Work");

  const skills = [
    "Python", "Java", "JavaScript", "C/C++", "68000 ASM", "MySQL/SQL", 
    "MongoDB", "MariaDB", "Git", "TypeScript", "ReactJS", "NodeJS", 
    "Flask", "Railway", "PyTorch", "Tensorflow", "Numpy", "Pandas",  
  ];

  const githubURL = "https://github.com/SpencerEpp";
  const linkedinURL = "https://www.linkedin.com/in/SpencerEpp";
  const cvFile = "/SpencerEpp_CV.pdf";

  return(
    <div id="app">
      <div className="w-full h-full wrapper">
        <div className="ripple"></div>
        <div className="ripple"></div>
        <div className="ripple"></div>
        <div className="flex h-full w-full overflow-y-scroll hidding-scroll">
          <div className="flex flex-wrap p-10 px-8 sm:py-20 md:py-20 lg:py-40 lg:pt-20 mx-auto h-full max-w-3xl justify-between">
            
            {/* Intro and Links to Platforms */}
            <div className="flex flex-col intro w-full  justify-center">
              <h2 className="text-5xl  moveUpAni"> Spencer Epp </h2>
              <h3 className="pt-4 text-2xl  text-gray-400 moveUpAni"> Jr. Developer </h3>
              <h3 className="pt-4 text-2xl  text-gray-400 moveUpAni"> Outdoor Enthusiast </h3>
              <div className=" rounded w-40 flex moveUpAni items-end py-3">
                <img src="/icons/location.svg" alt="Spencer's Location" className="w-6 h-6 sm:w-6 sm:h-6 "/>
                <p className="pt-2 ml-2 text-md font-thin inline-block align-bottom text-gray-400"> Calgary, Canada </p>
              </div>
              <div className="pt-4 w-full sm:w-70 flex flex-wrap xs:justify-between moveUpAni items-center">
                <a
                  href={cvFile}
                  download
                  className="w-20 h-7 flex items-center justify-center space-x-2 border border-[#fafafa] bg-transparent text-[#fafafa] hover:text-white rounded-[7px]"
                >
                  <img src="/icons/fileDownload.svg" alt="Download Icon" className="w-4 h-4" />
                  <span className="cursor-pointer">CV</span>
                </a>
                <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="inline-block ml-3">
                  <img src="/icons/linkedinIcon.svg" alt="LinkedIn" className="w-7 h-7 sm:w-7 sm:h-7" />
                </a>
                <a href={githubURL} target="_blank" rel="noopener noreferrer" className="ml-3">
                  <img src="/icons/githubIcon.svg" alt="GitHub" className="w-7 h-7 sm:w-7 sm:h-7" />
                </a>
              </div>
            </div>
            

            {/* Work & Education Tabs */}
            <div className="w-full pt-10">
              <div className="grid grid-cols-2 w-full mb-2 rounded-lg bg-slate-400 p-1 text-muted-foreground">
                <button
                  onClick={() => setTab("Work")}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                    tab === "Work" ? "bg-[#181922] text-white shadow" : "bg-transparent"
                  }`}
                >
                  Work
                </button>
                <button
                  onClick={() => setTab("Education")}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                    tab === "Education" ? "bg-[#181922] text-white shadow" : "bg-transparent"
                  }`}
                >
                  Education
                </button>
              </div>

              {/* Work Tab Content */}
              {tab === "Work" && (
                <div className="transition-all duration-500 mt-2 border border-white rounded-lg">
                  {/* Bow Group - General Labourer */}
                  <ul className="ml-10 border-l">
                    <li className="relative ml-10 py-4">
                      <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white" href="#">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                          <img className="aspect-square h-full w-full bg-background object-contain" alt="Bow Group" src="/images/building_logo.svg"/>
                        </span>
                      </a>
                      <div className="flex flex-col gap-1">
                        <time className="text-xs text-gray-400">Summer 2022</time>
                        <h2 className="font-semibold leading-none">Bow Group</h2>
                        <p className="text-sm text-gray-400">General Labourer</p>
                      </div>
                    </li>
                    {/* Digital Lifestyles - Dev Team */}
                    <li className="relative ml-10 py-4">
                      <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white" href="#">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                          <img className="aspect-square h-full w-full bg-background object-contain" alt="Digital Lifestyles" src="/images/digital_lifestyles_logo.svg"/>
                        </span>
                      </a>
                      <div className="flex flex-col gap-1">
                        <time className="text-xs text-gray-400">Summer 2021</time>
                        <h2 className="font-semibold leading-none">Digital Lifestyles</h2>
                        <p className="text-sm text-gray-400">Technical Support & Installation</p>
                      </div>
                    </li>
                    {/* WinSport - Ski Instructor */}
                    <li className="relative ml-10 py-4">
                      <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white" href="#">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                          <img className="aspect-square h-full w-full bg-background object-contain" alt="WinSport" src="/images/winsport_logo.svg"/>
                        </span>
                      </a>
                      <div className="flex flex-col gap-1">
                        <time className="text-xs text-gray-400">2019-2021</time>
                        <h2 className="font-semibold leading-none">WinSport</h2>
                        <p className="text-sm text-gray-400">Ski Instructor</p>
                      </div>
                    </li>
                    {/* CCH YMCA - Camp Counselor */}
                    <li className="relative ml-10 py-4">
                      <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white" href="#">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                          <img className="aspect-square h-full w-full bg-background object-contain" alt="Camp Chief Hector - YMCA" src="/images/ymca_logo.svg"/>
                        </span>
                      </a>
                      <div className="flex flex-col gap-1">
                        <time className="text-xs text-gray-400">Summer 2019</time>
                        <h2 className="font-semibold leading-none">Camp Chief Hector - YMCA</h2>
                        <p className="text-sm text-gray-400">Summer Camp Counselor</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {/* Education Tab Content */}
              {tab === "Education" && (
                <div className="transition-all duration-500 mt-2 border border-white rounded-lg">
                  <ul className="ml-10 border-l">
                    <li className="relative ml-10 py-4">
                      <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white" href="#">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                          <img className="aspect-square h-full w-full bg-background object-contain" alt="University" src="/images/mru_logo.svg" />
                        </span>
                      </a>
                      <div className="flex flex-col gap-1">
                        <time className="text-xs text-gray-400">2020 - 2025</time>
                        <h2 className="font-semibold leading-none">Mount Royal University</h2>
                        <p className="text-sm text-gray-400">B.S. Computer Science</p>
                      </div>
                    </li>
                    {/* Add more education items here */}
                  </ul>
                </div>
              )}
            </div>

            {/* Skills Section */}
            <div className="mt-10">
              <span
                className="text-xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold"
                style={{ fontFamily: "Manrope-Bold", color: "rgb(250, 250, 250)" }}
              >
                Skills
              </span>
              <div className="flex flex-wrap pt-4 sm:pt-8 w-full justify-center">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center rounded-[5px] w-fit px-3 py-1 text-xs h-8 ml-1 mb-1 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white border-opacity-20 text-white shadow-sm"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset",
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>



            {/* Projects */}
            <div className="w-full mt-10 flex flex-col">
              <span className="text-xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold" style={{ fontFamily: 'Manrope-Bold', color: 'rgb(250, 250, 250)' }}>Projects</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {projects.slice(0, 5).map((proj, i) => (
                  <div
                    key={i}
                    className="rounded-xl border bg-card text-card-foreground shadow flex flex-col"
                    style={{ borderColor: "rgb(156, 163, 175)" }}
                  >
                    <div className="flex w-full max-h-[15rem] min-h-[15rem] rounded-xl flex-col space-y-1.5 p-6 pb-2 skeleton relative">
                      <img src={proj.image} alt={`${proj.title} preview`} className="h-full w-full object-cover rounded-xl"/>
                    </div>
                    <div className="p-6 pt-0 flex flex-col gap-2">
                      <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                        {proj.title}
                      </div>
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>{proj.description}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0 flex flex-col items-start justify-between gap-4">
                      <div className="mt-2 flex flex-wrap gap-1">
                        {proj.skills.map((skill, j) => (
                          <div
                            key={j}
                            className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                      {proj.github && (
                        <div className="flex flex-row flex-wrap items-start gap-1">
                          <a target="_blank" href={proj.github}>
                            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github size-3"
                              >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                              </svg>
                              Source
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Link to full project list */}
                <Link to="/more-projects">
                  <div
                    className="rounded-xl border bg-card text-card-foreground shadow flex flex-col min-h-[457px] max-h-[457px]"
                    style={{ borderColor: "rgb(156, 163, 175)" }}
                  >
                    <div className="font-sans font-bold text-neutral-600 text-2xl dark:text-neutral-200 flex flex-col m-auto items-center">
                      More Projects
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-move-right-icon lucide-move-right"
                      >
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div> 


            {/* Footer */}
            <div className="py-8 w-full flex flex-col justify-end ">
              <hr className="w-full border-t border-gray-300/20 my-4"></hr>
              <div className="w-full flex flex-row justify-between moveUpAni bottom-0 items-center">
                <div className="flex ">
                  <span>
                    <img src="/icons/f1.svg" className="w-28 h-12"/>
                  </span>
                </div>
                <div className="flex flex-row ml-auto mr-2">
                  <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedinIcon.svg" alt="LinkedIn" className="w-7 h-7 sm:w-7 sm:h-7" />
                  </a>
                  <a href={githubURL} target="_blank" rel="noopener noreferrer" className="ml-3">
                    <img src="/icons/githubIcon.svg" alt="GitHub" className="w-7 h-7 sm:w-7 sm:h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

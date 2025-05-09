# SPENCER EPP – DEVELOPER PORTFOLIO

A minimalist full-stack developer portfolio built with React, TailwindCSS, and Vite.

## Features:
- Responsive layout with custom styling
- Animated background ripple effect
- Project showcase with tag filtering
- CV download and social links
- Modular component structure

## Tech Stack:
- React + Vite
- TailwindCSS
- Custom CSS with animations
- Deployed on GitHub Pages

## Folder Structure:
portfolio-website/                       # Root of your project                             <br>
├── public/                              # Public assets (served directly by Vite)          <br>
│   ├── fonts/                           # Custom font files (e.g., Manrope-Regular.ttf)    <br>
│   │   ├── Manrope-Regular.ttf                                                             <br>
│   │   └── Manrope-Bold.ttf                                                                <br>
│   └── SpencerEpp_CV.pdf                # PDF of my CV for download                        <br>
│                                                                                           <br>
├── src/                                 # Main source code folder                          <br>
│   ├── components/                      # React components                                 <br>
│   │   ├── App.jsx                      # Main app layout                                  <br>
│   │   └── MoreProjects.jsx             # Extended project listings                        <br>
│   ├── icons/                           # Static icons                                     <br>
│   │   ├── .svg                         # Various .svg icons                               <br>
│   │   └── favicon.png                  # Favicon used for browser tab                     <br>
│   ├── images/                          # Static images like noise background              <br>
│   │   ├── .svg                         # Various .svg logo images                         <br>
│   │   └── noise.jpg                                                                       <br>
│   ├── projects.js                      # Project data list (used by portfolio section)    <br>
│   ├── style.css                        # Main Tailwind + custom CSS styling               <br>
│   └── main.jsx                         # Vite entry file; ReactDOM mount point            <br>
│                                                                                           <br>
├── index.html                           # HTML template loaded by Vite                     <br>
├── package.json                         # Project dependencies and scripts                 <br>
├── vite.config.js                       # Vite build configuration                         <br>
├── tailwind.config.js                   # Tailwind theme and extensions                    <br>
├── postcss.config.js                    # PostCSS plugin setup                             <br>
├── .gitignore                           # Files/folders to exclude from git                <br>
├── README.md                            # Project overview and usage instructions          <br>
└── eslint.config.js                     # ESLint rules and formatting standards            <br>


## Setup:
- npm install
- npm run dev

## Build:
- npm run build

## Live Demo:
https://spencerepp.ca

## License:
MIT — open for personal or educational use.
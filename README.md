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
```
portfolio-website/                       # Root of your project                         
├── public/                              # Public assets (served directly by Vite)      
│   ├── fonts/                           # Custom font files (e.g., Manrope-Regular.ttf)
│   │   ├── Manrope-Regular.ttf                                                         
│   │   └── Manrope-Bold.ttf                
│   ├── icons/                           # Static icons                                 
│   │   ├── .svg                         # Various .svg icons                           
│   │   └── favicon.png                  # Favicon used for browser tab                 
│   ├── images/                          # Static images like noise background          
│   │   ├── .svg                         # Various .svg logo images                     
│   │   └── noise.jpg                                                 
│   └── SpencerEpp_CV.pdf                # PDF of my CV for download                    
│                                                                                       
├── src/                                 # Main source code folder                      
│   ├── components/                      # React components                             
│   │   ├── App.jsx                      # Main app layout                              
│   │   └── MoreProjects.jsx             # Extended project listings                                                                                  
│   ├── projects.js                      # Project data list (used by portfolio section)
│   ├── style.css                        # Main Tailwind + custom CSS styling           
│   └── main.jsx                         # Vite entry file; ReactDOM mount point        
│                                                                                       
├── index.html                           # HTML template loaded by Vite                 
├── package.json                         # Project dependencies and scripts             
├── vite.config.js                       # Vite build configuration                     
├── tailwind.config.js                   # Tailwind theme and extensions                
├── postcss.config.js                    # PostCSS plugin setup                         
├── .gitignore                           # Files/folders to exclude from git            
├── README.md                            # Project overview and usage instructions      
└── eslint.config.js                     # ESLint rules and formatting standards        
```

## Setup:
- npm install
- npm run dev

## Build:
- npm run build

## Deploy:
- npm run deploy

## Live Demo:
https://spencerepp.ca

## License:
MIT — open for personal or educational use.

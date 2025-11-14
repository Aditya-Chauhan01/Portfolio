import htmlLogo from './assets/frontend_logos/htmlLogo.png'
import jsLogo from './assets/frontend_logos/jsLogo.png'
import tailwindcssLogo from './assets/frontend_logos/tailwindcssLogo.png'
import nodejsLogo from './assets/backend_logos/nodejsLogo.png'
import GithubLogo from './assets/tools_logos/GithubLogo.png'
import vscodeLogo1 from './assets/tools_logos/vscodeLogo1.png'
import cssLogo from './assets/frontend_logos/cssLogo.png'
import expressLogo from './assets/backend_logos/expressLogo.png'
import mongodbLogo from './assets/backend_logos/mongodbLogo.png'
import postmanLogo from './assets/tools_logos/postmanLogo.png'


// education logos
import sce from './assets/education_logos/sce.jpeg'
import polyLogo from './assets/education_logos/polyLogo.png'

// projects logs
import banner from './assets/work_logos/banner.png'
import invoice from './assets/work_logos/invoice.png'


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            {name: 'HTML', logo: htmlLogo},
            {name: 'CSS', logo: cssLogo},
            {name: 'JavaScript', logo: jsLogo},
            {name: 'Tailwind Css', logo: tailwindcssLogo},
        ],
    },

    {
        title: 'Backend',
        skills: [
            {name: 'Node JS', logo: nodejsLogo},
            {name: 'Express JS', logo: expressLogo},
            {name: 'MongoDB', logo: mongodbLogo},
        ],
    },

    {
        title: 'Tools',
        skills: [
            {name: 'GitHub', logo: GithubLogo},
            {name: 'VS Code', logo: vscodeLogo1},
            {name: 'Postman', logo: postmanLogo},
        ],
    }
];

export const projects = [
    {
        id: 0,
        title: "Doctor Appointment System",
        description: "A web-based Doctor Appointment System for managing bookings, doctor schedules, and patient info. Features include user login, appointment scheduling, admin panel, and real-time status updates. Built to streamline clinic operations and improve patient experience.",
        image: banner,
        tags: ["JavaScript", "React JS", "Node JS", "MongoDB"],
        github: "https://github.com/Aditya-Chauhan01/Doctor-Appointment-System/tree/main",
        webapp: "https://doctor-appointment-system-frontend-s3vm.onrender.com/",
    },
    {
        id: 1,
        title: "AI invoice Generator",
        description: "A full-stack web app that automates invoice creation, and generate reminders using AI. Integrated Gemini API to auto-fill invoice data, and provide actionable insights. Includes JWT-based authentication, and responsive dashboard UI.",
        image: invoice,
        tags: ["JavaScript", "React JS", "Node JS", "MongoDB"],
        github: "https://github.com/Aditya-Chauhan01/AI-Invoice-App",
        webapp: "https://ai-invoice-app-mhxv.onrender.com/",
    },
];

export const education = [
    {
        id: 0,
        img: sce,
        school: "Shivalik College of Engineering",
        date: "july 2023 - July 2026",
        degree: "Bachelor of Technology - B.tech.",
    },

    {
        id: 1,
        img: polyLogo,
        school: "Govt. polytechnic srinagar garhwal",
        date: "sep 2020 - sep 2022",
        degree: "Civil Engineering",
    },
]
import { meta, shopify, starbucks, tesla, anideatech, vibhaa, datalore } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    php,
    telegram,
    twitterx
} from "../assets/icons";
import { data } from "autoprefixer";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Sr. Web Developer",
        company_name: "An Idea Tech",
        icon: anideatech,
        iconBg: "#ffffff",
        date: "July 2023 - April 2024",
        points: [
            "Used WordPress, HTML and Node.js to build strong and engaging web applications.",
            "Helped to create and deliver digital solutions by sharing ideas and offering technical skills for different client’s projects.",
            "Committed to staying current with web development trends by continuously learning new technologies.",
        ],
    },
    {
        title: "Jr. Web Developer",
        company_name: "Vibhaa Tech Innovations pvt ltd",
        icon: vibhaa,
        iconBg: "#ffffff",
        date: "Aug 2022 - Nov 2022",
        points: [
            "Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX, and JSON code with Statamic and Laravel Frameworks.",
            "Provided security, maintenance, and patching on the website interface to maintain viability after launch.",
            "Applied knowledge of JavaScript and Object-Oriented Programming to create successful designs.",
            "Developed technical solutions required to accommodate specific user-facing assets. Oversaw technical issues and troubleshooting requests to resolve user problems."
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Vibhaa Tech Innovations pvt ltd",
        icon: vibhaa,
        iconBg: "#ffffff",
        date: "May 2022 - Aug 2022",
        points: [
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Data Science Intern",
        company_name: "DataLore Labs Pvt. Ltd",
        icon: datalore,
        iconBg: "#ffffff",
        date: "July 2019 - Aug 2019",
        points: [
            "Implemented annual income prediction in Machine Learning using Decision Tree algorithm.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Telegram',
        iconUrl: telegram,
        link: 'https://t.me/imsharan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sharanindian',
    },
    {
        name: 'TwitterX',
        iconUrl: twitterx,
        link: 'https://x.com/sharankumar__',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
import theatre from "@/app/assets/theatre.jpg";
import payroll from "@/app/assets/payroll.jpg";
import quietattic from "@/app/assets/quietattic.jpg";
import thisuraverse from "@/app/assets/thisuraverse.png";
import mndengineering from "@/app/assets/mndengineering.png";
import angela from "@/app/assets/angela.png";
import lfw from "@/app/assets/lfw.jpg";
import photogallery from "@/app/assets/photogallery.jpg";
import rpal from "@/app/assets/rpal.png";


export const projects = [
    {
        title: "Theatre Reservation System",
        desc: "A comprehensive theatre reservation system featuring Stripe payment gateway, secure refund system, robust authentication and authorization mechanisms, review and comment section for theatres and movies, an embedded chatbot for user assistance, user-friendly seat selection, and options for customized discounts and promo codes.",
        devStack: ["React", "Node.js", "JavaScript", "Express", "MySQL", "GIT"],
        git: "https://github.com/ManadaHerath/Theater-reservation-system",
        img: theatre
    },
    {
        title: "Payroll Management System",
        desc: "A Windows Forms application for reviewing employee payments, generating detailed statistical reports, and adjusting the payment algorithm on a monthly basis. The system provides comprehensive tools for managing and analyzing employee compensation.",
        devStack: ["C#", ".NET", "MS SQL", "GIT"],
        git: "https://github.com/ManadaHerath/Payroll-Management-System",
        img: payroll
    },
    {
        title: "RPAL Parser",
        desc: "Created a compiler for the RPAL language using Python, encompassing the entire process from generating the abstract syntax tree (AST) to producing code for the CSE machine.",
        devStack: ["Python"],
        git: "https://github.com/ManadaHerath/RPAL-Parser",
        img: rpal
    },
    {
        title: "Film Production Management System",
        desc: "A Windows Forms application for managing film production, featuring both admin and user dashboards. The system allows for the management of actors and other roles, as well as handling payment details and other production-related tasks.",
        devStack: ["C#", ".NET", "MS SQL", "GIT"],
        git: "https://github.com/ManadaHerath/Film-Production-Management-System",
        img: quietattic
    },
    {
        title: "PhotoGallery",
        desc: "A portfolio website for a photographer with a gallery, contact form, and a photo gallery section to show best work of his.",
        devStack: ["HTML", "CSS", "JavaScript", "PHP"],
        git: "https://github.com/ManadaHerath/PhotoGallery",
        img: photogallery
    },
    {
        title: "Thisuraverse",
        desc: "A real portfolio website for a director/story writer. The website features his products, a blog, his ideas and contacting details.",
        devStack: ["HTML", "CSS", "JavaScript", "TypeScript"],
        git: "https://github.com/punxara/thisuraverse",
        img: thisuraverse
    },
    {
        title: "MNDENGINEERING",
        desc: "A real portfolio website for a SOLAR systems installation company. The website features their products, services, and contact details.",
        devStack: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/ManadaHerath/mnd-engineering",
        img: mndengineering
    },
    {
        title: "Facial Recognition Implementation",
        desc: "Implemented facial recognition for the LFW dataset and compared the results of CNN, DBN, and KNN models. The project also includes a comparison of the performance of different models and states why CNN is the best model for facial recognition.",
        devStack: ["Python", "Pandas", "Keras", "TensorFlow"],
        git: "https://github.com/ManadaHerath/Facial-Recognition-Using-LFW-Dataset",
        img: lfw
    },
    {
        title: "Web Development Practice Projects",
        desc: "Implemented concepts learned in the course from simple HTML, CSS, and JavaScript to React + Node.js projects with REST API, Database Management, and Secure Authentication. If you want to learn web development, this is the best place to start.",
        devStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "EJS"],
        git: "https://github.com/ManadaHerath/Web-Development-projects-by-Dr-Angela-Yu",
        img: angela
    }
];

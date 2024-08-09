import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import school1 from "../assets/educations/school-1.jpg";
import school2 from "../assets/educations/school-2.jpg";
import school3 from "../assets/educations/school-3.jpg";

export const HERO_CONTENT = `HI, Welcome to my Portfolio, I am a beginner developer. Hope you enjoy my portfolio :D`;

export const ABOUT_TEXT = `Hellow, my name is Iqbal Haidee, and I am a beginner developer eager to grow in the field of web development. Currently, I have a foundational understanding of Python, PHP, and JavaScript, and I am committed to deepening my skills in these areas. With a strong desire to learn and improve, I am dedicated to advancing my capabilities and seizing new opportunities in the world of web development.`;

export const EXPERIENCES = [
    {
        year: "2023 - 2024",
        role: "Internship",
        company: "PT. eBdesk Teknologi",
        description: `As a Data Crawler Intern, I used Python to create and optimize web scraping scripts for efficient data extraction and preprocessing. This role enhanced my skills in Python programming and data management.`,
        technologies: ["Python", "Docker", "Kubernetes"],
    },
];

export const PROJECTS = [
    {
        title: "Notes Website",
        image: project1,
        description:
            "Developed a web application for note-taking using PHP and MySQL. The platform allows users to create, edit, and delete notes, with all data securely stored in a MySQL database. The project features a user-friendly interface for efficient note management and retrieval.",
        technologies: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
    },
    {
        title: "Mobile Legends Top Up Website",
        image: project2,
        description:
            "An application for topping up Mobile Legends diamonds or accessing game boosting services. Built with PHP and MySQL, this platform provides an easy and secure experience for diamond purchases and game boosting services, ensuring safe transactions and efficient service.",
        technologies: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
    },
];

export const EDUCATION = [
    {
        name: "MI Bustanul Ulum",
        image: school1,
        level: "Sekolah Dasar",
        date: "2013 - 2019",
        address:
            "Jl. Cempaka No.25, Pesanggrahan, Kec. Batu, Kota Batu, Jawa Timur 65313",
    },
    {
        name: "MTs Negeri Batu",
        image: school2,
        level: "Sekolah Menengah Pertama",
        date: "2019 - 2022",
        address:
            "Jl. Pronoyudo, Dadaprejo, Kec. Junrejo, Kota Batu, Jawa Timur 65233",
    },
    {
        name: "SMK PGRI 03 Malang",
        image: school3,
        level: "Sekolah Menengah Kejuruan",
        date: "2022 - present",
        address:
            "Jl. Raya Tlogomas Gg. 9 No.29, Tlogomas, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144",
    },
];

export const CONTACT = {
    address:
        "Jl. Kamboja Atas, Pesanggrahan, Kec. Batu, Kota Batu, Jawa Timur 65313",
    phoneNo: "+62 878 5675 4195",
    email: "iqbalhaidee19@gmail.com",
};

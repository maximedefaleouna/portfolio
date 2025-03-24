import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaLaptopCode} from "react-icons/fa6";
import { FaFacebookSquare,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb, SiWireshark} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaStripe } from "react-icons/fa6";
import { SiCisco } from "react-icons/si"; 
import { BsEthernet } from "react-icons/bs";
import { SiSocketdotio } from "react-icons/si";
 import { projet1, projet2, projet3 , projet4 , projet5 , projet6 } from '../src/assets'; 
// Icône LinkedIn
 // Icône WhatsApp
export const tabs = [
    {name:"About Me",id:'about'},
    {name:"Skill",id:'skill'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'projects'},
    {name:"Testimonials",id:'testimonials'},
]

// export const whyChooseMe = [
//   {
//     title:"Unmatched Local Expertise",
//     icon:<GrUserExpert/>,
//     link:"",
//   },
//   {
//     title:"Comprehensive Market Analysise",
//     icon:<IoMdAnalytics/>,
//     link:"",
//   },
//   {
//     title:"Dedicated Client Support",
//     icon:<MdOutlineSupportAgent/>,
//     link:"",
//   },
//   {
//     title:"Innovative Marketing Strategies",
//     icon:<RiExchange2Fill/>,
//     link:"",
//   },
// ]

export const whyChooseMe = [
  {
    title: "Expertise Locale Inégalée",
    icon: <GrUserExpert />,
    link: "",
  },
  {
    title: "Analyse Complète du Marché",
    icon: <IoMdAnalytics />,
    link: "",
  },
  {
    title: "Support Client Dédié",
    icon: <MdOutlineSupportAgent />,
    link: "",
  },
  {
    title: "Stratégies Innovantes de Marketing",
    icon: <RiExchange2Fill />,
    link: "",
  },
]

// export const services = [
//   {
//     name:"UI/UX Design",
//     icon:<FaPaintBrush/>,
//     description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
//     voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
//     eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
//   },
//   {
//     name:"Web Development",
//     icon:<FaLaptopCode/>,
//     description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
//     voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
//     eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
//   },
//   {
//     name:"Content Creation",
//     icon:<TfiWrite/>,
//     description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
//     voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
//     eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!`,
//   },
  
// ]
export const services = [
  {
    name: "Design UI/UX",
    icon: <FaPaintBrush />,
    description: `Interfaces utilisateur intuitives et expériences interactives, offrant une navigation fluide et agréable, tout en mettant l'accent sur l'esthétique et la fonctionnalité.`,
  },
  {
    name: "Développement Web",
    icon: <FaLaptopCode />,
    description: `Sites web modernes et performants, adaptés aux besoins spécifiques, avec un design responsive et une optimisation pour tous les types d'appareils.`,
  },
  {
    name: "Réseau et Sécurité Système",
    icon: <TfiWrite />,
    description: `Solutions sécurisées pour les systèmes et réseaux, garantissant la protection des données sensibles et la prévention contre les cybermenaces.`,
  },
]


export const skills = [
  {
      title:"UI/UX",
      data:[
          {
              skill:"Figma",
              level:"Experienced",
          },
          {
              skill:"Sketch",
              level:"Intermediate",
          },
          {
              skill:"XD",
              level:"Intermediate",
          },
      ]
  },
  {
      title:"Frontend Development",
      data:[
          {
              skill:"HTML",
              level:"Experienced",
          },
          {
              skill:"CSS",
              level:"Experienced",
          },
          {
              skill:"JavaScript",
              level:"Experienced",
          },
          {
              skill:"Tailwind",
              level:"Intermediate",
          },
          {
              skill:"Bootstrap",
              level:"Experienced",
          },
          {
              skill:"React",
              level:"Experienced",
          },
          {
              skill:"React Native",
              level:"Experienced",
          },
      ]
  },
  {
      title:"Backend Development",
      data:[
          {
              skill:"Node JS",
              level:"Experienced",
          },
          {
              skill:"MongoDB",
              level:"Intermediate",
          },
          {
              skill:"PHP",
              level:"Experienced",
          },
          {
              skill:"Django",
              level:"Expecienced",
          },
          {
              skill:"MySQL",
              level:"Experienced",
          },
          {
            skill:"Laravel",
            level:"Intermediate",
          },
          {
            skill:"PostgreSQL",
            level:"Intermediate",
        },
      ]
  },
]


// export const projects = [
//   { 
//     id:1,
//     title: 'AI Powered School',
//     image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
//     category:"UI/UX",
//     description: `Transforming education with AI, our School UI Design project revolutionizes the 
//                      learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
//                      and intuitive navigation, our design empowers educators and students alike. Experience 
//                      innovation at its finest as we pave the way for a smarter, more efficient educational 
//                      journey.`,
//     demoLink: "https://google.com/",
//     stack:[
//       {
//         name:"XD",
//         icon: <SiAdobexd/>,
//         iconColor:"skyblue",
//       },
//     ]
//   },
//   {
//     id:2,
//     title: 'E-Commerce Application',
//     image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
//     category:"Web",
//     description:`Enhance your online shopping experience with our E-Commerce Application 
//       UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
//       interface offers easy navigation, personalized recommendations, and secure 
//       transactions. Elevate your digital storefront and captivate customers with a visually 
//       stunning design tailored to your brand`,
//     demoLink: "https://google.com/",
//     stack:[
//       {
//         name:"ReactJs",
//         icon: <DiReact/>,
//         iconColor:"skyblue",
//       },
//       {
//         name:"NodeJs",
//         icon: <FaNodeJs/>,
//         iconColor:"green",
//       },
//       {
//         name:"ExpressJs",
//         icon: <SiExpress/>,
//       },
//       {
//         name:"MongoDB",
//         icon: <SiMongodb/>,
//         iconColor:"limegreen",
//       },
//     ]
//   },
//   {
//     id:3,
//     title: 'Robotic Engineering Web Application',
//     image: 'https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png',
//     category:"Web",
//     description: `Unlock the future of robotics with our Robotic Engineering Web Application
//       project. Seamlessly integrating cutting-edge technology, data analytics, 
//       and collaborative tools, our platform empowers engineers to design, simulate, 
//       and optimize robotic systems. Experience innovation at its peak as we redefine the 
//       boundaries of robotic engineering.`,
//     demoLink: "https://google.com/",
//     stack:[
//       {
//         name:"ReactJs",
//         icon: <DiReact/>,
//         iconColor:"skyblue",
//       },
//       {
//         name:"NodeJs",
//         icon: <FaNodeJs/>,
//         iconColor:"green",
//       },
//       {
//         name:"ExpressJs",
//         icon: <SiExpress/>,
//       },
//       {
//         name:"MongoDB",
//         icon: <SiMongodb/>,
//         iconColor:"limegreen",
//       },
//       {
//         name:"MongoDBT",
//         icon: <SiMongodb/>,
//       },
//       {
//         name:"MongoDBT",
//         icon: <SiMongodb/>,
//       },
//       {
//         name:"MongoDBT",
//         icon: <SiMongodb/>,
//       },
//     ]
//   },
//   {
//     id:4,
//     title: 'Project Management application',
//     image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
//     category:"Apps",
//     description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
//                      Elevate your project management experience and achieve success with ease.`,
//     demoLink: "https://google.com/",
//     stack:[
//       {
//         name:"React Native",
//         icon: <TbBrandReactNative/>,
//         iconColor:"skyblue",
//       },
//       {
//         name:"NodeJs",
//         icon: <FaNodeJs/>,
//         iconColor:"green",
//       },
//       {
//         name:"ExpressJs",
//         icon: <SiExpress/>,
//       },
//       {
//         name:"MongoDB",
//         icon: <SiMongodb/>,
//         iconColor:"limegreen",
//       },
//     ]
//   },
//   {
//     id:5,
//     title: 'Mobile bank - App Design',
//     image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
//     category:"UI/UX",
//     description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
//     demoLink: "https://google.com/",
//     stack:[
//       {
//         name:"Figma",
//         icon: <CgFigma/>,
//         iconColor:"orangered",
//       },
//     ]
//   },
//   {
//     id:6,
//     title: 'Quiz App Development',
//     image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
//     category:"Apps",
//     description: `Elevate engagement and knowledge retention with our Quiz App 
//                     Development project. Seamlessly crafted for interactive learning 
//                     experiences, our app offers customizable quizzes, real-time feedback, 
//                     and captivating visuals. Empower users to test their knowledge anytime,
//                      anywhere, fostering a dynamic learning environment tailored to their 
//                      needs.`,
//       demoLink: "https://google.com/",
//     stack:[
//       {
//         name:"React Native",
//         icon: <TbBrandReactNative/>,
//         iconColor:"skyblue",
//       },
//       {
//         name:"NodeJs",
//         icon: <FaNodeJs/>,
//         iconColor:"green",
//       },
//       {
//         name:"ExpressJs",
//         icon: <SiExpress/>,
//       },
//       {
//         name:"MongoDB",
//         icon: <SiMongodb/>,
//         iconColor:"limegreen",
//       },
//     ]
//   },
// ]

export const projects = [
  { 
    id:1,
    title: 'Site Web pour École',
    image: projet1,
    category:"UI/UX",
    description: `Transformer l'éducation avec un site web sur-mesure pour une école. Ce projet se concentre sur une interface utilisateur claire et intuitive, 
                  facilitant la navigation pour les étudiants et les enseignants. Il inclut des fonctionnalités d'inscription en ligne, de gestion des cours, et bien plus.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"XD",
        icon: <SiAdobexd/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:2,
    title: 'Design pour Restaurant',
    image: projet2 ,
    category:"UI/UX",
    description:`Création d'un design unique pour un restaurant, combinant esthétisme et fonctionnalité. Le site présente le menu, les avis clients, la réservation en ligne 
                et une présentation visuelle attrayante du restaurant, tout en offrant une navigation fluide et une expérience client agréable.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
    ]
  },
  {
    id:3,
    title: 'Application Web de Chat',
    category:"Web",
    image: projet3 ,
    description: `Développement d'une application web de chat permettant une communication en temps réel, avec une interface simple et intuitive. Ce projet inclut des fonctionnalités de messagerie instantanée, 
                  de notifications, et de gestion des utilisateurs. Une application idéale pour favoriser l'échange et la collaboration en ligne.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"Socket.IO",
        icon: <SiSocketdotio/>,
        iconColor:"",
      },
    ]
  },
  {
    id:4,
    title: 'Site E-Commerce',
    image: projet4 ,
    category:"Web",
    description: `Création d'un site e-commerce avec un design moderne, simple à naviguer et optimisé pour les conversions. Le site inclut des fonctionnalités telles que la gestion des produits, le panier d'achat, 
                 le système de paiement sécurisé et l'intégration avec des outils d'analytics pour suivre les performances.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
      {
        name:"Stripe",
        icon: <FaStripe/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:5,
    title: 'Détection de Vulnérabilités Réseau',
    image: projet5,
    category:"Réseau",
    description: `Réalisation d'un projet de détection de vulnérabilités sur un réseau, permettant d'identifier les failles de sécurité. 
                  Ce projet inclut l'utilisation d'outils d'audit de sécurité et la mise en place de solutions pour protéger le réseau contre les menaces externes.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"Nmap",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
      {
        name:"Wireshark",
        icon: <SiWireshark/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:6,
    title: 'Câblage d\'une Maison',
    image: projet6 ,
    category:"Réseau",
    description: `Réalisation d'un projet de câblage pour une maison. Ce projet comprend la configuration du câblage pour l'installation d'un réseau informatique, ainsi que la mise en place d'une infrastructure 
                  permettant l'accès à Internet et à d'autres services réseau dans chaque pièce.`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"Câblage Ethernet",
        icon: <BsEthernet/>,
        iconColor:"",
      },
      {
        name:"Cisco",
        icon: <SiCisco/>,
        iconColor:"",
      },
    ]
  },
]

export const clients = [
  {
    image: client1,
    name: 'Samuel Eze',
    review: `Travailler avec cette équipe a été une expérience incroyable. Leur professionnalisme, leur expertise technique et leur attention aux détails ont véritablement transformé notre projet. Le site web que nous avons développé ensemble a dépassé nos attentes et continue de générer de bons résultats.`,
  },
  {
    image: client2,
    name: 'Richael Linda',
    review: `Je suis extrêmement satisfait du travail accompli. L'équipe a compris nos besoins dès le départ et a livré une solution parfaitement adaptée. Le site est non seulement esthétiquement superbe, mais aussi extrêmement fonctionnel et rapide. Je recommande vivement leurs services.`,
  },
  {
    image: client3,
    name: 'Gloria Chiwendu',
    review: `Ce fut un plaisir de collaborer avec cette équipe. Leur capacité à intégrer des éléments innovants tout en respectant nos exigences techniques a été impressionnante. Leur réactivité et leur soutien continu tout au long du projet ont été des plus appréciés. Le résultat final est à la hauteur de nos attentes.`,
  },
  {
    image: client4,
    name: 'Precious Stone',
    review: `Le travail effectué sur notre plateforme a été exceptionnel. Non seulement ils ont su créer une interface intuitive et élégante, mais ils ont aussi pris soin d'assurer la sécurité de notre système, ce qui est essentiel pour nous. Grâce à leur expertise, notre projet est un véritable succès.`,
  },
  {
    image: client5,
    name: 'Ndubisi John',
    review: `Je suis impressionné par le niveau de compétence et de professionnalisme démontré par cette équipe. Ils ont su prendre en compte toutes nos préoccupations et nous fournir un produit de qualité supérieure, tout en respectant les délais. Leur service après-vente est également irréprochable.`,
  },
];


export const contactOptions = [
  {
    title:"Email",
    value:"maxime@gmail.com",
    icon:<MdOutlineAlternateEmail />,
    link:"",
    to:"maximedefa@gmail.com?subject=Demande%20de%20renseignements%20sur%20vos%20services&body=Salut%2C%20je%20vous%20%C3%A9cris%20depuis%20votre%20site%2C%20j'aimerais%20discuter%20%C3%A0%20propos%20de%20vos%20services."
  },
  {
    title:"WhatsApp",
    value:"+22890094164",
    icon:<FaWhatsapp/>,
    link :"https://wa.me/22890094164?text=Salut%2C%20je%20vous%20%C3%A9cris%20depuis%20votre%20site%2C%20j'aimerais%20discuter%20%C3%A0%20propos%20de%20vos%20services.",
    to : ""
  },
  {
    title:"Address",
    value:"Kara Togo",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"whatsapp",
      icon:<FaWhatsapp/>,
      link:"https://whatsapp.com/channel/0029VaMRf9T1yT25RvBXGR2u",
    },
    {
      name:"Linkedin",
      icon:<FaLinkedinIn/>,
      link:"https://www.linkedin.com/in/tchassama-dessoklema-defaleouna-2014b3323",
    },
    {
      name:"Twitter",
      icon:<FaXTwitter/>,
      link:"",
    },
   
];

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Me",id:'about'},
      {name:"Skill",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Grégoire ALI",link:"https://aligregoire.github.io/Portifolio/"},
        {name:"DJADJARO Khabirou",link:"https://dak6000.github.io/PortFolio-dak/"},
        {name:"Sam Dev",link:"https://samledev.onrender.com"},
      ]
    },
]

    
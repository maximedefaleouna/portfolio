import './Footer.css'
import Logo from "../../Commons/Logo"
import SocialHandles from '../../Commons/SocialHandles'
import {footer} from "../../sources"
import { Link } from 'react-scroll'

function Footer() {
    return (
        <footer id='footer'>
            <div className="wrapper">
                <div className="column" data-aos="fade-right">
                    <Logo />
                    <SocialHandles />
                </div>
                {
                    footer.map((list, index) => (
                        <div className="column" data-aos="fade-right" key={index}>
                            <h3 className="muted title">
                                {list.title}
                            </h3>
                            {
                                list.routes.map((route, index) => (
                                    route.id ? (
                                        <Link 
                                            to={route.id || ""} 
                                            smooth={true} 
                                            className='route' 
                                            key={index}
                                        >
                                            {route.name}
                                        </Link>
                                    ) : (
                                        <a 
                                            href={route.link} 
                                            className='route' 
                                            key={index}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            {route.name}
                                        </a>
                                    )
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="flex-center copyright" data-aos="fade-left">
                <h4>Copyright &copy; All rights reserved Maxime DEF | 2024</h4>
                <p className="muted">Créé par Maxime DEFALEOUNA</p>
            </div>
        </footer>
    );
}

export default Footer;


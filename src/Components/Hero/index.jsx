import { Link } from 'react-scroll';
import './Hero.css'
import me from '../../assets/photo.webp'
import Achievement from '../../Commons/Achievement';
function Hero() {
    return ( <section id='hero'>
     <div className="wrapper info-container">
        <div className="column">
            <h3 className="sub-title" data-aos="fade-right">
                Salut suis <span className="primary">Maxime DEFALEOUNA</span>
            </h3>
            <h1 className="heading-1" data-aos="fade-up">
                Etudiant <span>Devellopeur web </span>
                Fullstack
                </h1>
                <p className="muted" data-aos="fade-up" data-aos-delay="200">
                Transformons ensemble vos idées en solutions digitales innovantes et sécurisées, en alliant expertise technique et créativité pour offrir des expériences uniques et performantes
                </p>
                <div className="flex-center buttons-wrapper">
                   {/* <Link to='services'smooth={true} className='btn primary'>Learn more</Link>
                   <Link to='contact'smooth={true} className='btn '>Get started</Link> */}

                </div>
        </div>
        <div className="column hero-image" data-aos="fade-left" data-aos-delay="200">
            <img src={me} alt="" />

        </div>
     </div>
     <div className="achievement-cluster">
        <div className="wrapper">
            <Achievement/>
        </div>
     </div>
    </section> );
}

export default Hero;
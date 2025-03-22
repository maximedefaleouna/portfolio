import { Link } from 'react-scroll';
import './Hero.css'
import me from '../../assets/me.png'
import Achievement from '../../Commons/Achievement';
function Hero() {
    return ( <section id='hero'>
     <div className="wrapper info-container">
        <div className="column">
            <h3 className="sub-title">
                Salut suis <span className="primary">Maxime DEFALEOUNA</span>
            </h3>
            <h1 className="heading-1">
                Un etudiant <span>Devellopeur web</span>
                Fullstack
                </h1>
                <p className="muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque optio porro, ex, nemo dignissimos magnam maiores similique ipsa rem eos hic repudiandae accusamus. Alias corporis maiores doloribus aperiam odio?

                </p>
                <div className="flex-center buttons-wrapper">
                   <Link to='services'smooth={true} className='btn primary'>Learn more</Link>
                   <Link to='contact'smooth={true} className='btn '>Get started</Link>

                </div>
        </div>
        <div className="column hero-image">
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
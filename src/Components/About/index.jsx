import './About.css'
import {whyChooseMe} from '../../sources'
function About() {
    return ( <section id='about'>
      <div className="wrapper">
        <div className="section-header">
            <h1 className="heading-1" data-aos="fade-left">
                <span className="gradient-text">About us</span>
            </h1>
            <h4 className="sub-title muted" data-aos="fade-left" >
                 Étudiant en développement web 
                et mobile, passionné par la création d'applications performantes et interactives. avec des compétences en réseaux et cybersécurité, visant à garantir
                des systèmes sécurisés et optimisés. En quête d'opportunités pour développer des solutions innovantes dans le domaine du développement et de la
                protection des infrastructures numériques.
            </h4>

        </div>
        <div className="group">
            {
                whyChooseMe.map((list,index)=>(
                    <div className="flex-center group-item" data-aos="fade-right" key={index}>
                        <div className="flex-center icon-wrapper">
                            {list.icon}
                        </div>
                        <h4 className="title">
                            {list.title}
                        </h4>
                    </div>
                ))
            }
        </div>
      </div>
    </section> );
}

export default About;
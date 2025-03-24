import './Contact.css'
import { contactOptions } from '../../sources';
function Contact() {
    return ( <section id='contact' data-aos="fade-zoom-in">
        <div className="wrapper">
            <div className="contact-options">
                {
                    contactOptions.map((option,index)=>(
                        <a href={option.link ? `${option.link}`:`mailto:${option.to}`}
                        target="_blank"
                        rel="noopener noreferrer" className="flex-center option" data-aos="fade-right" key={index}>
                           <div className="flex-center icon-wrapper">
                            {option.icon}
                           </div>
                           <h4 className="muted">{option.title}</h4>
                           <h3 className="value">
                            {option.value}
                           </h3>
                        </a>
                    ))
                }
            </div>
            <div className="contact-form" data-aos="fade-left">
                <div className="top">
                    <h1 className="title">
                        <span className="gradient-text">
                            join forces with me !
                        </span>
                    </h1>
                    <p className="muted">Contactez-moi dès aujourd'hui pour transformer vos idées en réalité ! et le partage d'opportunité</p>
                </div>
               <form  action="https://formspree.io/f/myzejaew" method="POST">
               <div className="middle">
                    <div className="flex row">
                     <input type="text" placeholder='Nom' name='firstname' className="control" spellCheck="false" />   
                     <input type="text" placeholder='prenoms' name='firstname' className="control" spellCheck="false" />   

                    </div>
                    <div className="flex row">
                     <input type="email" placeholder='Adresse mail' name='email' className="control" />   
                     <input type="tel" placeholder='Numero de telephone' name='phone' className="control" />   

                    </div>
                    <textarea spellCheck="false" name="message" cols={30} rows={10} className="control" placeholder='Message'></textarea>
                </div>
                <div className=" flex-center bottom">
                    <button className="btn primary">Envoyer</button>
                </div>
               </form>
            </div>
        </div>
    </section> );
}

export default Contact;
import './Contact.css'
import { contactOptions } from '../../sources';
function Contact() {
    return ( <section id='contact'>
        <div className="wrapper">
            <div className="contact-options">
                {
                    contactOptions.map((option,index)=>(
                        <div className="flex-center option" key={index}>
                           <div className="flex-center icon-wrapper">
                            {option.icon}
                           </div>
                           <h4 className="muted">{option.title}</h4>
                           <h3 className="value">
                            {option.value}
                           </h3>
                        </div>
                    ))
                }
            </div>
            <div className="contact-form">
                <div className="top">
                    <h1 className="title">
                        <span className="gradient-text">
                            join forces with me !
                        </span>
                    </h1>
                    <p className="muted">I build with precision and passion, creating web projects that stands out Its ass straightforward ass that!</p>
                </div>
                <div className="middle">
                    <div className="flex row">
                     <input type="text" placeholder='Nom' name='firstname' className="control" />   
                     <input type="text" placeholder='prenoms' name='firstname' className="control" />   

                    </div>
                    <div className="flex row">
                     <input type="email" placeholder='Adresse mail' name='email' className="control" />   
                     <input type="tel" placeholder='Numero de telephone' name='phone' className="control" />   

                    </div>
                    <textarea name="message" cols={30} rows={10} className="control" placeholder='Message'></textarea>
                </div>
                <div className=" flex-center bottom">
                    <button className="btn primary">Envoyer</button>
                </div>
            </div>
        </div>
    </section> );
}

export default Contact;
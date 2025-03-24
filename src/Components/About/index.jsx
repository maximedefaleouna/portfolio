import './About.css'
import {whyChooseMe} from '../../sources'
function About() {
    return ( <section id='about'>
      <div className="wrapper">
        <div className="section-header">
            <h1 className="heading-1">
                <span className="gradient-text">About us</span>
            </h1>
            <h4 className="sub-title muted">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab corporis necessitatibus vero error provident accusantium magnam a, nostrum, explicabo temporibus facere vitae laboriosam et cumque deserunt assumenda, dicta praesentium consectetur. 
            </h4>

        </div>
        <div className="group">
            {
                whyChooseMe.map((list,index)=>(
                    <div className="flex-center group-item" key={index}>
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
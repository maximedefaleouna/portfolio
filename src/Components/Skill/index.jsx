import './Skill.css'
import { skills } from '../../sources';
import SkillCard from './SkillCard';
function Skill() {
    return ( <section id="skill">
      <div className="wrapper">
        <div className="section-header">
            <h1 className="heading-1" data-aos="fade-left">
                <span className="gradient-text">My Skill</span>
            </h1>
        </div>
        <div className="skills-container">
            {
                skills.map((list,index)=>(
                    <SkillCard {...list} key={index} />
                ))
            }
        </div>
      </div>
    </section> );
}

export default Skill;
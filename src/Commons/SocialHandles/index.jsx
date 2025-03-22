import './SocialHandles.css'
import { socialHandles } from '../../sources';
function SocialHandles() {
    return ( <div className="handles-container">
        {
            socialHandles.map((handle,index)=>(
                <a href={handle.link} target='_blank' key={index} className='flex-center icon-wrapper'>
                    {handle.icon}
                </a>
            ))
        }
    </div> );
}

export default SocialHandles;

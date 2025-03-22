import { useState } from 'react';
import './Achievement.css'
import Odometer from "react-odometerjs"
import { useEffect } from 'react';
function Achievement() {
    const [experience, setExperience] = useState(0)
    const [client, setClient] = useState(0)
    const [projects , setProject]= useState(0)

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClient(421);
            setExperience(6);
            setProject(1.2);
        },3000)
        return ()=>clearTimeout(timeOutId)
    },[])
    return ( <div className='achievement-container'>
       

        <div className="card">
            <div className="flex-center">
                <Odometer value={experience} className='title'/>
                <h1 className="title">+</h1>
            </div>
            <p className="muted name">Years Experience</p>

        </div>

        <div className="card">
            <div className="flex-center">
                <Odometer value={client} className='title'/>
                <h1 className="title">+</h1>
            </div>
            <p className="muted name">clients worldwide</p>

        </div>

        <div className="card">
            <div className="flex-center">
                <Odometer value={projects} className='title'/>
                <h1 className="title">k+</h1>
            </div>
            <p className="muted name">completed projects</p>
        </div>
    </div> );
}

export default Achievement;
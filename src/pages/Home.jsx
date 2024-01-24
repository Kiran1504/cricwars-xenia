import { useEffect } from 'react';
import stadium1 from '../assets/stadium1.jpg';
import stadium3 from '../assets/stadium3.jpg';
import hammer from '../assets/hammer.png';
import './home.css';
const Home = () => {

    useEffect(() => {
        let stadium1 = document.getElementById('stadium1');
        let stadium2 = document.getElementById('stadium2');
        let hammer = document.getElementById('hammer');
        window.addEventListener('scroll', () => {
            let scroll = window.scrollY;
            console.log(stadium1.style.width, " scroll: ", scroll);
            stadium1.style.width = 100 + scroll * -0.05 + '%';
            stadium1.style.opacity = 100 + scroll * -0.2 + '%';
            console.log(hammer.style.transform);
        });
    }, [])


    return (
        <div className='w-full m-auto'>
            <img src={stadium3} alt="stadium 1" id='stadium2' />
            <img src={stadium1} alt="stadium 1" id='stadium1' />
            <div className='tilt'>

                <img src={hammer} alt="hammer" id='hammer' />
            </div>
            {/* <img src={stadium4} alt="stadium 1" className='w-full absolute' /> */}
        </div>
    )
}

export default Home

import './home.css';
import first from '../../../public/authorphoto/first.jpg';
import second from '../../../public/authorphoto/second.jpg';
import third from '../../../public/authorphoto/third.jpg';
import fifth from '../../../public/authorphoto/fifth.jpg';
import sixth from '../../../public/authorphoto/sixth.jpg';
import seventh from '../../../public/authorphoto/seventh.jpg';
import arrowLeft from '../../../public/icons/arrow-left.svg';
import arrowRight from '../../../public/icons/arrow-right.svg';
import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

export default function Gallery() {
    const [counterPhoto, setCounterPhoto] = useState(0);

    const nextPhoto = () => {
        setCounterPhoto((prevCounter) => (prevCounter + 1) % photos.length);
    };

    const previousPhoto = () => {
        setCounterPhoto((prevCounter) => (prevCounter - 1 + photos.length) % photos.length);
    };

    const photos = [ sixth, first, second, third,  fifth, seventh ];

    const transitions = useTransition(counterPhoto, {
        key: counterPhoto,
        from: {
            opacity: 0,
            transform: 'translateY(-200%) scale(1)',
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0%) scale(1)',
        },
        leave: {
            opacity: 0,
            transform: 'translateY(100%) scale(1.2)', // Изменено на translateY(1000%)
            width: 0,
            height: 0,
        },
    });
    
    
    return (
        <div className='container-gallery'>
            <button className='arrow-button left-arrow' onClick={previousPhoto}>
                <img src={arrowLeft} alt='' />
            </button>
            {transitions((style, item) => (
                <animated.img
                style={(style)}
                className='image-gall ' 
                src={photos[item]}
                alt={`Photo ${item}`}
                />
            ))}
            <button className='arrow-button right-arrow' onClick={nextPhoto}>
                <img src={arrowRight} alt='' />
            </button>
        </div>
    );
}
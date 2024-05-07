import { useState } from 'react';
import './button.css';

interface ChildProps {
    text?: string;
    onClick?: () => void;
}

export default function Button({ text, onClick }: ChildProps) {
    const [displayText, setDisplayText] = useState<string | undefined>(text);

    const handleClick = () => {
        if (text === "Купить") {
            setDisplayText("Добавлено в корзину");
            if (onClick) onClick();
        } else {
            if (onClick) onClick();
        }
    };

    return (
        <button className='button' onClick={handleClick}>
            {displayText}
        </button>
    );
}

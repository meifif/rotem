import React from 'react';

const Button = ({
                    text,
                    Icon,
                    backgroundColor = "bg-pink-500",
                    hoverColor = "hover:bg-pink-600"
                }) => {
    return (
        <button
            className={`${backgroundColor} text-white px-4 sm:px-6 md:px-8 py-3 rounded-full text-lg sm:text-base font-semibold ${hoverColor} transition duration-300 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto`}
        >
            {Icon && <Icon className="ml-2 flex-shrink-0" size={24}/>}
            <span className="whitespace-nowrap">{text}</span>
        </button>
    );
};

export default Button;
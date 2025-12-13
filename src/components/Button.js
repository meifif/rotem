import React from 'react';

const Button = ({
    text,
    Icon,
    variant = "primary", // primary, outline, dark
    size = "default", // small, default, large
    className = "",
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-500 tracking-wider uppercase";
    
    const variants = {
        primary: "bg-secondary text-white hover:bg-accent hover:shadow-gold",
        outline: "bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-white",
        dark: "bg-primary text-white hover:bg-primary-light",
        white: "bg-white text-primary hover:bg-background border border-border",
    };

    const sizes = {
        small: "px-5 py-2.5 text-xs",
        default: "px-8 py-3.5 text-sm",
        large: "px-10 py-4 text-sm",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {Icon && <Icon className="ml-2 flex-shrink-0 w-5 h-5" />}
            <span>{text}</span>
        </button>
    );
};

export default Button;

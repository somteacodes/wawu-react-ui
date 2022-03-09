import React, { HTMLAttributes, ReactNode } from "react"

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    color?: 'primary' | 'secondary' | 'error' | 'success'|'warning'
    disabled?: boolean,
    variant?: 'normal' | 'rounded' | 'circle' | 'outline'    
    iconLeft?: string,
    iconRight?: string,
    icon?: string,
    size?: string
}

export const Button = ({ children, variant = "normal", color = 'primary',size='medium', disabled, ...props }: Props) => {

    // BUTTON VARIANT
    let btnVariant;
    switch(variant){
        case 'normal':
            btnVariant=`inline-flex items-center px-4 py-2 border border-transparent text-sm rounded-md shadow-sm`;
            break;
        case 'rounded':
            btnVariant=`inline-flex items-center px-4 py-2 border border-transparent text-sm rounded-full shadow-sm`;
            break;
        case 'circle':
            btnVariant=`inline-flex items-center p-2 border border-transparent text-sm rounded-full shadow-sm`;
            break;
        case 'outline':
            btnVariant=`inline-flex items-center px-4 py-2 border border-gray-300 text-sm rounded-md shadow-sm bg-transparent text-gray-700`;
            break;
    }
    // BUTTON COLOR
     let btnColor;
     switch(color){
        case 'primary':
            btnColor=`bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium  text-white`;
            break
        case 'secondary':
            btnColor=`bg-blue-50 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-50 font-medium  text-blue-700`;
            break;
        case 'error':
            btnColor=`bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-medium  text-white`;
            break;   
        case 'warning':
            btnColor=`bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 font-medium  text-white`;
            break;
        case 'success':
            btnColor=`bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-medium  text-white`;
            break; 
     }

    
    const disabledStyle=`bg-gray-400 text-white cursor-auto`
    return (
        <button {...props} className={`
        ${disabled ? ` ${btnVariant} ${disabledStyle}` : `${btnVariant} ${btnColor}`}
        `}>
            {children}
        </button>
    );
}

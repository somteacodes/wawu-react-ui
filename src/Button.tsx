import React, { HTMLAttributes, ReactNode } from "react"

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    color?: 'primary' | 'secondary' | 'error' | 'success'|'warning'
    disabled?: boolean,
    variant?: 'normal' | 'rounded' | 'circle',   
    iconLeft?: string,
    iconRight?: string,
    icon?: string,
    size?: 'small'|'medium'|'large'
}

export const Button = ({ children, variant = "normal", color = 'primary',size='medium', disabled, ...props }: Props) => {
// BUTTON SIZE
let buttonSize;
switch(size){
    case 'small':
        buttonSize={origin:'p-1.5',x:`px-2.5`, y:`py-1.5`,text:'sm'};
        break;
    case 'medium':
        buttonSize={origin:'p-2',x:`px-4`, y:`py-2`,text:'base'};
        break;
    case 'large':
        buttonSize={origin:'p-3',x:`px-6`, y:`py-3`,text:'lg'};
        break;
}
// BUTTON COLOR
let btnColor;
switch(color){
    case 'primary':
        btnColor={background:`bg-blue-600`, hover:'bg-blue-700'};
        break;
    case 'success':
        btnColor={background:`bg-green-600`, hover:'bg-green-700'};
        break;
    case 'warning':
        btnColor={background:`bg-amber-600`, hover:'bg-amber-700'};
        break;
    case 'error':
        btnColor={background:`bg-red-600`, hover:'bg-red-700'};
        break;
    case 'secondary':
        btnColor={background:`bg-blue-600`, hover:'bg-blue-700'};
        break;
}
// HOVER STYLE
    let btnHover = `hover:${btnColor.hover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`
    // BUTTON VARIANT
    let btnVariant;
    switch(variant){
        case 'normal':
            btnVariant=`inline-flex items-center border border-transparent text-sm rounded-md shadow-sm 
            ${buttonSize.y} ${buttonSize.x}  text-${buttonSize.text}
            ${btnColor.background} font-medium text-white 
             
            `;
            break;
        case 'rounded':
            btnVariant=`inline-flex items-center border border-transparent text-sm rounded-full shadow-sm 
            ${buttonSize.y} ${buttonSize.x} text-${buttonSize.text}
            ${btnColor.background} font-medium text-white 
             
            `;
            break;
        case 'circle':
            btnVariant=`inline-flex items-center border border-transparent text-sm rounded-full shadow-sm 
              ${buttonSize.origin} text-${buttonSize.text}
            ${btnColor.background} font-medium text-white 
             
            `;
            break;
       
    }
    

    
    const disabledStyle=`bg-gray-400 text-white cursor-auto`
    return (
        <button {...props} className={`
        ${disabled ? ` ${btnVariant} ${disabledStyle}` : `${btnVariant} ${btnHover}`}
        `}>
            {children}
        </button>
    );
}

import React, { HTMLAttributes, ReactNode } from "react"

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    color?: 'primary' | 'secondary' | 'error' | 'success'|'warning'
    disabled?: boolean,
    variant?: 'normal' | 'rounded' | 'circle' | 'outline'    
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
        btnColor={color:`blue`};
        break;
    case 'success':
        btnColor={color:`green`};
        break;
    case 'warning':
        btnColor={color:`amber`};
        break;
    case 'error':
        btnColor={color:`red`};
        break;
    case 'secondary':
        btnColor={color:`blue`};
        break;
}
// HOVER STYLE
    let btnHover = `hover:bg-${btnColor.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${btnColor.color}-500`
    // BUTTON VARIANT
    let btnVariant;
    switch(variant){
        case 'normal':
            btnVariant=`inline-flex items-center border border-transparent text-sm rounded-md shadow-sm 
            ${buttonSize.y} ${buttonSize.x}  text-${buttonSize.text}
            bg-${btnColor.color}-600 font-medium text-white 
             
            `;
            break;
        case 'rounded':
            btnVariant=`inline-flex items-center border border-transparent text-sm rounded-full shadow-sm 
            ${buttonSize.y} ${buttonSize.x} text-${buttonSize.text}
            bg-${btnColor.color}-600 font-medium text-white 
             
            `;
            break;
        case 'circle':
            btnVariant=`inline-flex items-center border border-transparent text-sm rounded-full shadow-sm 
              ${buttonSize.origin} text-${buttonSize.text}
            bg-${btnColor.color}-600 font-medium text-white 
             
            `;
            break;
        case 'outline':
            btnVariant=`inline-flex items-center border border-${btnColor.color}-300 text-sm rounded-md shadow-sm bg-transparent text-${btnColor.color}-600 font-medium
            ${buttonSize.y} ${buttonSize.x} text-${buttonSize.text}
             
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

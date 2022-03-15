import React, { HTMLAttributes, ReactNode } from "react"
import {ButtonVariant, ButtonSize,ButtonDisabled,ButtonColor} from './ButtonTheme'
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    color?: 'primary' | 'secondary' | 'error' | 'success'|'warning'
    disabled?: boolean,
    variant?: 'normal' | 'rounded' | 'circle',   
    iconLeft?: string,
    iconRight?: string,
    icon?: string,
    size?: 'sm'|'md'|'lg'
}

export const Button = ({ children, variant = "normal", color = 'primary',size='md', disabled, ...props }: Props) => {
//  const classNames = `${ButtonVariant[variant]} ${ButtonSize[size]} ${ButtonColor[color]} ${ButtonDisabled[variant]}`

 const classNames= disabled? `${ButtonDisabled[variant]}   ${ButtonSize[size]} `:`${ButtonVariant[variant]} ${ButtonSize[size]} ${ButtonColor[color]}`

 return (
     <button className={classNames}>{children}</button>
 )

}

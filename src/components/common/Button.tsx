import { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps } from "react";

type ButtonProps ={
    label: string;
    handleClick?: () => void; 
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const  Button = ({label, handleClick, ...rest}: ButtonProps) => {
    return (
        <button onClick={handleClick}  {...rest}>{label}</button>
    );
  }
  
  export default Button;
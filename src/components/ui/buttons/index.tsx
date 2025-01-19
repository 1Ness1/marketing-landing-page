import {ReactNode} from "react";
import cn from "classnames";
import "./buttons.scss";

type ButtonProps = {
    children: ReactNode;
    variant: "primary-button" | "secondary-button";
    className?: string;
}

export default function Button ({children, className, variant}: ButtonProps) {
    return <button className={cn(variant, "button", className)} type="button">{children}</button>
}

import {ReactNode} from "react";
import cn from "classnames";
import "./buttons.scss";

type ButtonProps = {
    children: ReactNode;
    className?: string;
}

export const PrimaryButton = ({children, className}: ButtonProps): ReactNode => {
    return (
        <button className={cn("primary-button", "button", className)} type="button">{children}</button>
    )
}

export const SecondaryButton = ({children, className}: ButtonProps) => {
    return (
        <button className={cn("secondary-button", "button", className)} type="button">{children}</button>
    )
}

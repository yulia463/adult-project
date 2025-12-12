import styles from "./Button.module.scss";
import { ReactNode } from "react";

type ButtonSize = "M" | "S";
type ButtonVariant =
    | "dark"
    | "lightPink"
    | "pink"
    | "pinkGradient"
    | "purpleGradient"
    | "white"
    | "gray";

interface ButtonProps {
    children: ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    icon?: React.ElementType | null;
    onClick?: () => void;

}

export default function Button({
                                   children,
                                   size = "M",
                                   variant = "dark",
                                   icon: Icon = null,
                                   onClick,
                               }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[size]} ${styles[variant]}`}
            onClick={onClick}
        >
            <span>{children}</span>

            {Icon && (
                <Icon
                    className={styles.icon}
                    width={size === "M" ? 30 : 20}
                    height={size === "M" ? 30 : 20}
                />
            )}
        </button>
    );
}

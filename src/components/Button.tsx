import { Button as HeroButton, type ButtonProps as HeroButtonProps } from "@heroui/react"
import type { ReactNode } from "react";

export interface ButtonModProps extends Omit<HeroButtonProps, "variant" | "size" | "isPending" | "className" | "children" > {
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    children?: ReactNode;
}

const ButtonMod = ({
    loading = false,
    leftIcon,
    rightIcon,
    className = "",
    children,
    ...rest
}: ButtonModProps) => {
  return (
    <HeroButton
        className={
            `bg-matcha shadow-none rounded-xl px-5 py-2 font-semibold text-white transition-all hover:bg-matcha-milk hover:scale-103 ${className}`
        }
        isPending={loading}
        {...rest}
    >
        {!loading && leftIcon}
        {children}
        {!loading && rightIcon}
    </HeroButton>
  )
}

export default ButtonMod
import { VariantProps, cva } from "class-variance-authority"
import React, { ButtonHTMLAttributes, forwardRef } from "react"
import cn from "../../../utils/cn"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant:{
                default:
                    "bg-cyan-500 text-primary-foreground text-white hover:opacity-90",
                outline:
                    "border border-solid border-cyan-500 shadow-sm hover:bg-cyan-200 text-cyan-800",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
            }
        },
        defaultVariants :{
            variant: "default",
            size: "default",
        }
    }

)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, onClick, ...props}, ref) => {
    return (
      <button
          ref={ref}
          onClick={onClick}
          className={cn(buttonVariants({variant, size, className}))}
          {...props}
      />
    )
  })

export {Button, buttonVariants}
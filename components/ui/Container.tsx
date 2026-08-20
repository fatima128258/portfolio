import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "main";
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-7xl",
};

export function Container({
  as: Comp = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

import { ReactElement } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactElement;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  secondary,
  fullWidth,
  onClick,
  large,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        flex
        gap-2
        items-center
        justify-center
        disabled:opacity-40
        disabled:cursor-not-allowed
        rounded-2xl
        font-semibold
        hover:opacity-70
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-red-600"}
        ${secondary ? "text-neutral-900" : "text-neutral-900"}
        ${secondary ? "border-white" : "border-red-600"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-red-600" : ""}
        ${outline ? "text-red-600" : ""}
      `}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;

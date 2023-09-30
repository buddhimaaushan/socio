interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type = "text",
  onChange,
  disabled,
  label,
}) => {
  return (
    <div className="w-full">
      {label && (
        <p className="text-xl text-white font-semibold mb-2">{label}</p>
      )}
      <input
        autoComplete="on"
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
          w-full
          p-4 
          text-lg 
          bg-neutral-900 
          border-2
          border-neutral-900 
          rounded-2xl
          outline-none
          text-white
          focus:border-red-800
          focus:border-2
          transition
          disabled:bg-neutral-800
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      />
    </div>
  );
};

export default Input;

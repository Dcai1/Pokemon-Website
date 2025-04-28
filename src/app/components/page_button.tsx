type PageButtonProps = {
    onClick: () => void;
    label: string;
    disabled?: boolean;
};

export default function PageButton({ onClick, label, disabled = false }: PageButtonProps) {
    return (
        <button
        onClick={onClick}
        disabled={disabled}
        className={`text-shadow-2xs text-xl sm:text-2xl text-red-500 text-shadow-white shadow-red-400 border-2 p-5 m-3 bg-gradient-to-br from-red-200 via-red-300 to-red-500 rounded-2xl font-bold shadow-md hover:opacity-60 transition-all duration-300 
            ${disabled ? "opacity-60 cursor-not-allowed grayscale" : "hover:scale-150"}`}
        >
            {label}
        </button>
    );
};
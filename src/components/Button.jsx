function Button({children, className}) {
    return (
        <button className={`bg-[#4CAF4F] py-1 px-5 text-white rounded-[3px] ${className}`}>
            {children}
        </button>
    )
}

export default Button;
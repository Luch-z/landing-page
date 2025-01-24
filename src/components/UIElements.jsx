export function Button({ children, className }) {
    return (
        <button
            className={`bg-[#4CAF4F] py-1 px-5 text-white rounded-[3px] ${className}`}
        >
            {children}
        </button>
    );
}

export function ClientLogo({ src, alt }) {
    return <img src={src} alt={alt} />;
}


export function FeatureCard({ imgSrc, title, description }) {
    return (
        <div className="md:w-1/4 shadow-md rounded-md p-3">
            <img className="m-auto" src={imgSrc} alt="" />
            <h1 className="text-3xl whitespace-normal">{title}</h1>
            <p>{description}</p>
        </div>
    );
}

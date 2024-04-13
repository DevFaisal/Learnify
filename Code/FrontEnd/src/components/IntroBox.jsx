
function IntroBox({ title, className = "from-green-500" }) {
    return (
        <div className={`md:mb-10 mb-0 bg-gradient-to-t ${className}  to-transparent p-20  max-w-80 max-h-80 rounded-md`}>
            <h1 className="text-gray-700 text-4xl text-justify">{title}</h1>
        </div>
    );
}

export default IntroBox;
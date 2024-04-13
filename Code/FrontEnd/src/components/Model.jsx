
function Model({ children, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop:blur-sm flex justify-center
         items-center ">
            <div className="flex flex-col max-w-96  bg-green-300 pt-2 rounded-t-md">
                <button className="bg-white text-md m-1 place-self-end rounded-full px-1"
                    onClick={onClose}
                >X</button>
                {children}
            </div>
        </div>
    );
}

export default Model;
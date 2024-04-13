function Input({ label, type = "text", value, onChange }) {
    return (
        <>
            <label >{label}</label>
            <input className="bg-[#C9E9D2] rounded-sm px-2 py-1 w-80 outline-0" type={type} value={value} onChange={onChange} />
        </>
    );
}

export default Input;
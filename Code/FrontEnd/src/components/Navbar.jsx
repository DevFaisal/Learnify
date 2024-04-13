import Model from "./Model";
import Signin from "./Signin";
import SignUp from "./SignUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ items }) {
    const [showModel, setShowModel] = useState(false);
    const [link, setLink] = useState("");
    const navigate = useNavigate();

    const handleOpen = (link) => {
        if (link === "/signin" || link === "/signup") {
            setShowModel(true);
            setLink(link);
            return;
        }
        else {
            navigate(link);
        }


    };


    return (
        <>
            <nav className="flex justify-between items-center bg-[#DBFFD8] p-2 rounded-md m-3">
                <div className="px-2 py-1 bg-white rounded-md">
                    <h1 className="text-2xl ">Learnify</h1>
                </div>
                <ul>
                    <li className="text-gray-500 text-md inline-block m-2"><a href="/">Home</a></li>
                    {items.map((item, index) => {
                        return <li key={index} className="text-gray-500 text-md inline-block m-2"><button onClick={() => {
                            handleOpen(item.link);
                        }}>{item.name}</button></li>
                    })}
                </ul>
            </nav>
            <div>
                {showModel && (
                    <Model onClose={() => setShowModel(false)}>
                        {link === "/signin" && <Signin />}
                        {link === "/signup" && <SignUp />}
                    </Model>
                )}
            </div>
        </>
    )
}

export default Navbar;
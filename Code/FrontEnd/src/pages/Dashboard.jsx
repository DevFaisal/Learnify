import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { verifyIdToken } from '../utils/firebase';

function Dashboard() {
    const navigate = useNavigate();


    // useEffect(() => {
    //     const token = localStorage.getItem("user");
    //     console.log(token);
    //     verifyIdToken(token)
    //         .then((decodedToken) => {
    //             console.log("verified")
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //             navigate("/");
    //         });
    // }, [])

    const items = [
        { name: "Dashboard", link: "/dashboard" },
        { name: "Courses", link: "/courses" },
    ]
    return (
        <div>
            <Navbar items={items} />
            <div className="flex flex-col gap-3 sm:px-0 px-10 justify-center items-center h-72">
                <h1 className="text-6xl text-gray-700">Welcome to <span className="text-green-500">Learnify</span></h1>
                <h3 className="text-gray-400">Start your learning journey here</h3>
            </div>

            <div className="flex flex-col justify-center items-center pb-10">
                <h2 className="text-2xl italic text-gray-500">Why Choose Learnify?</h2>
            </div>
            <div className='flex justify-center gap-10'>
                <div className='flex justify-center'>
                    <ul>
                        <h1 className='text-xl font-bold p-2 bg-green-700 rounded-md text-white mb-2'>List of enrolled courses:</h1>
                        <li>Introduction to Python</li>
                        <li>Web Development Fundamentals</li>
                        <li>Data Science Essentials</li>
                        <li>Graphic Design Basics</li>
                        <li>Personal Finance Management</li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <ul>
                        <h1 className='text-xl font-bold p-2 bg-green-700 rounded-md text-white mb-2'>Progress bars:</h1>
                        <li>Introduction to Python: 75% complete</li>
                        <li>Web Development Fundamentals: 50% complete    </li>
                        <li>Data Science Essentials: 20% complete</li>
                        <li>Graphic Design Basics: Not started    </li>
                        <li>Personal Finance Management: 10% complete</li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <ul>
                        <h1 className='text-xl font-bold p-2 bg-green-700 rounded-md text-white mb-2'>Recommended courses:</h1>

                        <li>Advanced Python Programming</li>
                        <li>Full Stack Web Development</li>
                        <li>Machine Learning Fundamentals</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import IntroBox from '../components/IntroBox'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

function Courses() {
    const [coursePrice, setCoursePrice] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            onSnapshot(collection(db, "courses"), (doc) => {
                const data = doc.docs.map((doc) => doc.data());
                setCoursePrice(data);
            });
        };
        fetchData();
    }, []);
    
    const webDevelopment = [
        { name: "React JS", link: "/reactjs" },
        { name: "Node JS", link: "/nodejs" },
        { name: "MongoDB", link: "/mongodb" },
        { name: "Express JS", link: "/expressjs" },
        { name: "MERN Stack", link: "/mernstack" },
        { name: "MEAN Stack", link: "/meanstack" },
    ]

    const MachineLearning = [
        { name: "Python", link: "/python" },
        { name: "Data Science", link: "/datascience" },
        { name: "Deep Learning", link: "/deeplearning" },
        { name: "Machine Learning", link: "/machinelearning" },
    ]

    const items = [
        { name: "Dashboard", link: "/dashboard" },
        { name: "Courses", link: "/courses" },
    ]


    return (
        <div>
            <Navbar items={items} />
            <div className='flex justify-center mt-10'>
                <h3 className="text-4xl text-gray-900">Courses</h3>
            </div>


            <div className="grid grid-cols-3 px-10 justify-evenly mt-10">
                <div className='flex flex-col  pb-10 justify-center w-screen'>
                    <div>
                        <p>React JS & Node JS ₹1000</p>
                        <p>Web Development ₹2200</p>
                        <p>Full Course ₹3222</p>
                        <p className='text-xl font-bold bg-green-800 w-40 h-0.5 mb-11'>Click to Buy</p>
                    </div>
                    <h1
                        className='text-3xl  flex gap-10 text-gray-900  col-span-3 pb-20'
                    >{coursePrice.map((course) =>
                        <button
                            className='bg-fuchsia-400 rounded-md p-1'
                        >₹{course.Price}</button>
                    )}</h1>
                </div>
                <h1
                    className='text-3xl text-gray-900  col-span-3 pb-20'
                >Web Development</h1>
                {webDevelopment.map((course, index) => {
                    return <IntroBox
                        key={index}
                        title={course.name}
                        className='from-green-500 border-2 border-green-500 to-transparent p-20  max-w-80 max-h-80 rounded-md'
                    />
                })}

            </div>

            <div className="grid grid-cols-3 px-10 justify-evenly mt-10">
                <h1
                    className='text-3xl text-gray-900  col-span-3 pb-20'
                >Machine Learning</h1>
                {MachineLearning.map((course, index) => {
                    return <IntroBox
                        key={index}
                        title={course.name}
                        className='from-green-500 border-2 border-green-500 to-transparent p-20  max-w-80 max-h-80 rounded-md'
                    />
                })}

            </div>
        </div>
    )
}

export default Courses
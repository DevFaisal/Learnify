import Navbar from "./components/Navbar"
import IntroBox from "./components/IntroBox"


function App() {
  const items = [
    { name: "SignIn", link: "/signin" },
    { name: "SignUp", link: "/signup" },
  ]
  return (
    <>
      <Navbar items={items} />
      <div className="flex flex-col gap-3 sm:px-0 px-10 justify-center items-center h-72">
        <h1 className="text-6xl text-gray-700">Welcome to <span className="text-green-500">Learnify</span></h1>
        <h3 className="text-gray-400">Unlock Your Potential with Expert-Led Tech Courses</h3>
      </div>

      <div className="flex justify-center items-center pb-10">
        <h2 className="text-2xl italic text-gray-500">Why Choose Learnify?</h2>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <IntroBox title={"Expert Instructors"} />
        <IntroBox title={"Interactive Learning"} />
        <IntroBox title={"Flexible Schedule"} />
      </div>


      <div className="flex mt-14  bg-green-700 justify-center items-end">
        <h2 className="text-sm text-gray-100 p-1">Join Learnify Today!</h2>
      </div>


    </>
  )
}

export default App

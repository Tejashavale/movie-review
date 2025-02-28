import Movies from "./Movies/Movies"
import Navbar from "./Navbar/Navbar"

const Home = () => {
    return <div className="flex flex-col">
        <p className="text-6xl text-red-200 p-8">Movies</p>
        <Navbar></Navbar>
        <Movies></Movies>
    </div>
}

export default Home
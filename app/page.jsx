import Home from "./-components/home";
import Navbar from './-components/navbar'
import connectDB from '../config/database'

const HomePage  = async  () => {
  // await connectDB()

  return (
    <div>
      <Home/>

    </div>
  );
}

export default HomePage;


import Home from "./-components/Home";
import Navbar from './-components/Navbar'
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


import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import HomeImg from '../Assets/2.jpg'
import Footer from '../Components/Footer';

function Home (){
    return(
        <>
        <Navbar />
        
        <Hero 
        cName="hero"
        heroImage={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show" />
        
        <Destination />

        <Trip />

        <Footer />
        </>
    )
}

export default Home;
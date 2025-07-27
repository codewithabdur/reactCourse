import {Navbar, Footer, Contact} from "./Component"
import {Hero,Blogs} from "./Container"

const Homepage = () =>{
    return (
        <>
        <Navbar />
        <Hero />
        <Blogs />
        <Contact />
        <Footer />
        </>
    )
}

export default Homepage;
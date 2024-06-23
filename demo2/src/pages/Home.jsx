import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
export default function Home()
{
    return(
        <div>
            <Header/>
            <Search/>
            <div className="container">
            <h2 className="title"> Home page</h2>
            </div>
            <Footer/>
        </div>
    )
}
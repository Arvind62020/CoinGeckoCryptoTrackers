import CoinTable from "../componests/CoinTable/CoinTable";
import Banner from "../componests/Banner/Banner";
import Navbar from "../componests/Navbar/Navbar";




function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <CoinTable />
        </>
    );
}

export default Home;
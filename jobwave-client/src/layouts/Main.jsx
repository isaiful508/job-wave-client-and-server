import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from './../components/Footer';
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {/* Navbar */}

            <Navbar></Navbar>
            {/* Outlet*/}

            <div className="min-h-[calc(100vh-306px)]">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>


        </div>
    );
};

export default Main;
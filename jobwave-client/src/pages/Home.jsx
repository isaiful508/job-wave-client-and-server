
import { Toaster } from "react-hot-toast";
import Carousal from "../components/Carousal";
import TabsCategories from "../components/TabsCategories";


const Home = () => {
    
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Carousal></Carousal>
            <TabsCategories></TabsCategories>
        </div>
    );
};

export default Home;
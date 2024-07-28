import { Outlet } from "react-router-dom";
import Faculty from "./Faculty";
import Footer from "./Footer";
import Header from "./Header";

const Layout2 = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <Header />
            </div>
            <div className="p-2" style={{ fontSize: "12px" }}>
                {/* <h1>This is Home Page</h1> */}
                <Outlet />
            </div>
            <div className='row'>
                <Footer />
            </div>
        </div >
    );
}

export default Layout2;
import Navbar from "../NavBar/navbar";
import Brand from "./brand";
import "./BrandHeader.css"

function BrandHeader ({children}) {

    return (
        <header>
            <Brand></Brand>
            <Navbar></Navbar>
        </header>
    );
}

export default BrandHeader;
import NBitems from "./navbaritems";
import "./navbar.css"

function NavBar () {
    let dummyData = [
        {label: "Inicio", uri: "/"},
        {label: "Asanic", uri: "/asanic"},
        {label: "Galería", uri: "/galeria"},

    ];

    let navBarItems = dummyData.map((o, i)=>{
        return (
            <NBitems
                label={o.label} 
                uri={o.uri} 
                key={i}>
            </NBitems>
        );
    });
    return (
        <nav>
            <ul>
                <li>{navBarItems}</li>
            </ul>
        </nav>

    );
}

export default NavBar;
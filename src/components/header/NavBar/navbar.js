import NBitems from "./navbaritems";
import "./navbar.css"

function NavBar () {
    let dummyData = [
        {label: "Inicio", uri: "/"},
        {label: "MuniApp", uri: "/muniapp"},
        {label: "Munasbar", uri: "/munasbar"},
        {label: "Asanic", uri: "/asanic"},
        {label: "Galería", uri: "/galeria"},
        {label: "Plan de Arbitrios", uri: "/arbitrios"},
        {label: "Noticias", uri: "/noticias"},
        {label: "Contáctanos", uri: "/contacto"},
        {label: "Landing", uri: "/landing"},
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
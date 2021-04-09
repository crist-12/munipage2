import {NavLink} from 'react-router-dom';
import "./navbar.css"

function NBitems ({label, uri}) {
    return (
        <NavLink to={uri} className="nl">{label}</NavLink>
    );
}

export default NBitems;
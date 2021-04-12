import "./BrandHeader.css";
import Signout from "../Singout/singout"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Brand = () => {

    return (
        <Container>
           

            <Row>
                <Col > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8OntDrWdz4puTSrLeF6oPLAsVPuJuCr-VQ&usqp=CAU" alt="Municipalidad de San Nicolás" /></Col>
                <Col xs={7}></Col>
                <Col ><div  classname="justify-content"><Signout /></div></Col>
            </Row>

        </Container>
    );
}

export default Brand;
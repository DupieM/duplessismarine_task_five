import React from 'react';
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function BasicNav() {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Chart Exercise</Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link href="/">Bar Chart</Nav.Link>
                    <Nav.Link href="/line">Line Chart</Nav.Link>
                    <Nav.Link href="/pie">Pie Chart</Nav.Link>
                    <Nav.Link href="/doughnut">Doughnut Chart</Nav.Link>
                    <Nav.Link href="/polararea">Polar Area Chart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BasicNav;
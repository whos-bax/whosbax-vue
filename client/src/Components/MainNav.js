import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function MainNav() {
    return (
        <Navbar bg="light" expand="sm" className='mx-1'>
            <Container fluid>
                <Navbar.Brand href="/">
                    <strong>who</strong> am ii
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="/about-me">About me</Nav.Link>
                        <NavDropdown title="Link" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://instagram.com/whosbax" target='_blank'>
                                Instagram
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://soundcloud.com/whosbax" target='_blank'>
                                Soundcloud
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/channel/UCKBGb4Irll2yK8xvYBC-KyA" target='_blank'>
                                Youtube
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav;
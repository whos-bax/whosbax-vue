import { Container, Row } from "react-bootstrap"

function Footer() {
    const footerSt = {
        position : 'fixed',
        bottom: '0.5em',
        right: '1em'
    }

    const fontSt = {
        textAlign: 'end',
        fontSize: '1vw',
        color: 'white',
        fontWeight: '100',
        textShadow: '0 0 3px rgb(70,70,70)',
        opacity: '0.8'
    }

    return (
        <Container className='me-0 justify-content-end' style={footerSt}>
            <p style={fontSt}>
                © 2021. whosbax. All rights reserved.
            </p>
        </Container>
    )
}
export default Footer
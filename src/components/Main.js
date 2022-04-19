import {Container, Button} from "react-bootstrap"

/* const Main = () => {
    return (
        <main>
                <p>Este es el cuerpo de mi aplicación</p>
        </main>  

    )
} */
const Main = () => {
    return (
        <Container as="main" fluid> 
            Main
        <Button>Click nuevo</Button>    
        </Container>  

    )
}

export default Main
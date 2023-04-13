import { Navbar,Container } from "react-bootstrap"

const MyNav =()=>{
    return   (    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt="LOGO"
          src="https://play-lh.googleusercontent.com/GiIlC0rgHh8CgNZDnQ_a8G9XE5Dh1rErvk_Xa8GGLTLLc0fXjiUIuT8JbZ_pinmEXg"
          width="30"
          height="30"
          className="d-inline-block align-top rounded"
        />{' '}
        Spaceflight
      </Navbar.Brand>
    </Container>
  </Navbar>)
}
export default MyNav
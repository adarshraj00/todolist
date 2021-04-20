import React from 'react'
import { Button ,Nav,NavDropdown,Navbar,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";

export default function Header() {
    return (
        <div style={{position:"sticky"}}>
            <Navbar bg="light" expand="lg">
          <Navbar.Brand><Link to="/" style={{}}>TodoList</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link style={{padding:"3px" ,marginLeft:"5px",color:"black"}} to="/">Home</Link>
              <Link style={{padding:"3px",marginLeft:"5px" ,color:"black"}} to="/about">About</Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

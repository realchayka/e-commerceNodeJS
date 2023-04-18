import React, {useContext} from 'react';
import {Context} from "../App.jsx";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts.js";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar className="justify-content-lg-between" variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <NavLink style={{color:'white', fontWeight:'bold', textDecoration:'none', marginRight:'20px'}} to={SHOP_ROUTE}>Node-Shop</NavLink>
                {
                    user.isAuth ?
                        <div>
                            <Button style={{marginRight:'20px'}} variant={"outline-light"}>Админ панель</Button>
                            <Button variant={"outline-light"}>Войти</Button>
                        </div>
                        :
                        <div>
                            <Button variant={"light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </div>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
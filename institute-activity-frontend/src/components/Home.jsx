import React from "react";
import { Navbar,Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, 
    GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink
 } from "../styles/styles"; 
import { useNavigate, Link } from "react-router-dom";

import bg from "../assets/bg.jpg";
import bg1 from "../assets/bg1.png";


const Home = () =>{
    const navigate = useNavigate();
    

    const handleLoginClick = () =>{
        navigate('/choose-user');
    }

    return(
        <>
            <Navbar>
                <Logo src={bg1} alt="Logo" />
                <NavigationLinks>
                    <NavLink href="#">About Us</NavLink>
                    <NavLink href="#">Products</NavLink>
                    <NavLink href="#">Contact Us</NavLink>
                </NavigationLinks>
                <ButtonsContainer>
                    <LoginButton onClick={handleLoginClick} >Sign In</LoginButton>
                    <GuestButton onClick={handleLoginClick} >Guest Mode</GuestButton>
                </ButtonsContainer>
            </Navbar>
            <HomeContainer>
                <SchoolInfo>
                    <Title>Institute Activity Management System</Title>
                    <LoremTextContainer>
                        <h4>Seamlessly manage every student activity smart, simple, and all in one place.
Empowering institutions with organized, efficient, and engaging activity tracking.</h4>
                    </LoremTextContainer>
                    <AdminRegisterLink>Admin Register</AdminRegisterLink>
                </SchoolInfo>
                <SchoolImage src={bg} alt="Pupils" />
            </HomeContainer>
        </>
    )
}

export default Home;



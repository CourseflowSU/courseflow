import React from "react";
// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./FooterStyles";
import styled from "styled-components";
import "./footer.css";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#1C9941",
        textAlign: "center",
        marginTop: "-50px",
        marginBottom: "40px" }}
      >
        CourseFlow: Course Document Database for Everyone
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Courses</FooterLink>
            <FooterLink href="#">Notes</FooterLink>
            <FooterLink href="#">Exams</FooterLink>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.linkedin.com/in/mizbah-celik/">Mizbah Celik</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/mert-ture/">Mert Ture</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/keremkor/">Kerem Kor</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.twitter.com">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <FooterLink
          style={{
            marginTop: "20px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >Copyright © 2021 Courseflow
        </FooterLink>

      </Container>
    </Box>
  );
};

export const Box = styled.div`
  padding: 80px 60px 20px 60px;
  background: #f2f3f5;
  position: flex;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(250px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #4e657e;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  color: #4e657e;
  margin-bottom: 25px;
  font-weight: bold;
`;


export default Footer;

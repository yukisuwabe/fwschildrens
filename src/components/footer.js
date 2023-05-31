import React from "react";
import {
  Box,
  Container,
  Row,
  FooterLink,
} from "./footerElement";

const Footer = () => {
  return (
    <Box>
      <h1 style={{
        textAlign: "center",
        marginTop: "-50px"
      }}>
        <a style={{ color: '#2d2d2d', textDecoration: 'none' }} href='/'>
          Japanese American Incarceration in Children's Books
        </a>
      </h1>

      <Container>
        <Row style={{ justifyItems: 'center', textAlign: 'center', color: '#2d2d2d' }}>
          <FooterLink href="/baseballsavedus">Baseball Saved Us</FooterLink>
          <FooterLink href="/sylvia&aki">Sylvia & Aki</FooterLink>
          <FooterLink href="/theycalledusenemy">They Called Us Enemy</FooterLink>
        </Row>
      </Container>
      <p style={{ color: '#2d2d2d', textAlign: 'center' }}>©Yuki Suwabe, 2023</p>
    </Box>
  );
};
export default Footer;

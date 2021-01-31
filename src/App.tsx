import React from 'react';
import './App.css';
import { HomePage } from './pages/home-page/home-page';
import 'rsuite/dist/styles/rsuite-default.css';
import { Section } from './components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import { typeface } from './theme';
import { Footer } from './components/footer/footer';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';


function App() {
  return (
    <>
    <Router>
        <MyNav>
          <MyNavItem><a href="/"><img width={"30px"} src="/images/logo.svg"></img>&nbsp;Screen-Free Saturday</a></MyNavItem>
          {/* <MyNavItem hoverEffect><a href="/donate">Donate</a></MyNavItem> */}
        </MyNav>
        <MyPage>
          <Route exact path="/" component={HomePage} />
          <Route path="/donate" component={Section} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
        </MyPage>
    </Router>
    <Footer/>
    </>
  );
}

export default App;

const MyNav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    position: fixed;
    top: 0;
    width:100%;
    padding: 8px;
    z-index:100;
    ${typeface}
`

const MyNavItem = styled.li<{hoverEffect?:boolean}>`
  float: left;
  padding: 12px 20px;
  color: white;
  cursor: pointer;
  
  ${props => props.hoverEffect && `
    transition: background-color 0.5s ease;
    &:hover {
      background-color:#272727;
    };
  `}

  & a {
    color: white;
    text-decoration: none;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
`

const MyPage = styled.div`
  margin-top:60px;
`
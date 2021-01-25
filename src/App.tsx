import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/home-page/home-page';
import { Dropdown, Icon, Nav, Navbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Logo, Section } from './components';
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import { typeface } from './theme';


function App() {
  return (
    <Router>
        <MyNav>
          <MyNavItem><a href="/">Screen-Free Saturday</a></MyNavItem>
          <MyNavItem hoverEffect><a href="/users">Donate</a></MyNavItem>
        </MyNav>
        <Route exact path="/" component={HomePage} />
        <Route path="/users" component={Section} />
    </Router>
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

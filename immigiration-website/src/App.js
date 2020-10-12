/*
 * @Author: Dongchen Xie
 * @Date: 2020-10-12 08:21:44
 * @LastEditors: Dongchen Xieesresw
 * @LastEditTime: 2020-10-12 18:18:32
 * @Description: file content
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Navbar from "./widget/Navbar.js"
import LanguageRoute from "./routes/languageRoute.js"
import style from './style/GlobleStyle'
import Footer from "./widget/Footer"
function App() {
  return (
    <ThemeProvider >
    <Router>
     <Navbar/>
     <LanguageRoute/>
     <Footer/>
  </Router>
  </ThemeProvider>
  );
}

export default App;

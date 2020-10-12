/*
 * @Author: Dongchen Xie
 * @Date: 2020-07-21 00:14:30
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-07-21 00:20:30
 * @Description: file content
 */ 
import {
    createMuiTheme,

  } from "@material-ui/core/styles";

  export default createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    status: {
      danger: "#666666"
    },
    palette: {
      primary: {
        main: "#003FBA" ,
      },
      
    },
  });
/*
 * @Author: Dongchen Xie
 * @Date: 2020-10-12 11:09:02
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-10-12 16:18:27
 * @Description: file content
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useStore from "../zustand/zustand";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import logoWhite from "../images/logo-white.png";
import bg from "../images/gold-bgc-footer-2000-1279.jpg";
import grey from "@material-ui/core/colors/grey";
import Tooltip from "@material-ui/core/Tooltip";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import facebook from "../images/facebook.png";
import skype from "../images/skype.png";
import ig from "../images/lg-logo.png";
import whatsapp from "../images/whatsapp.png";
const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  centerContainer: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  socialMediaIcon: {
    width: "2.5rem",
    height: "2.5rem",
  },
}));
export default function Footer() {
  const classes = useStyles();
  const langCode = useStore((s) => s.language);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize:"cover"
      }}
    >
      <Container>
        <Box style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            src={logoWhite}
            style={{
                height:"130px",
              width: "130px",
              maxWidth: "35vw",
              margin: "1rem auto 1rem auto",
            }}
          />
        </Box>
        <Grid container justify="center">
          <Grid xs={12} sm={6} item>
            <Box className={classes.centerContainer}>
              <Box>
                <Box>
                  <Typography
                    style={{
                      color: "#FAFAFA",
                      fontWeight: 500,
                      fontSize: "1.2rem",
                      marginBottom: "1.2rem",
                    }}
                    className={classes.text}
                  >
                    HEAD OFFICE
                  </Typography>
                  <Typography
                    style={{
                      color: "#FAFAFA",
                      fontWeight: 400,
                      fontSize: "1rem",
                    }}
                  >
                    SOLO District - 2025 Willingdon Avenue,
                    <br />
                    FL 9 Burnaby, British Columbia, Canada
                    <br />
                    V5C 0J3{" "}
                    <LocationOnIcon
                      style={{
                        color: "#FAFAFA",
                        fontWeight: 400,

                        fontSize: "1.2rem",
                      }}
                    />
                  </Typography>
                </Box>
                <Box style={{ marginTop: "1.5rem" }}>
                  <Typography
                    style={{
                      color: "#FAFAFA",
                      fontWeight: 500,
                      fontSize: "1.2rem",
                      marginBottom: "1.2rem",
                    }}
                    className={classes.text}
                  >
                    VANCOUVER OFFICE
                  </Typography>
                  <Typography
                    style={{
                      color: "#FAFAFA",
                      fontWeight: 400,
                      fontSize: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    #510-666 Burrard Street, Vancouver,
                    <br />
                    British Columbia, Canada
                    <br />
                    V6C 3P6{" "}
                    <LocationOnIcon
                      style={{
                        color: "#FAFAFA",
                        fontWeight: 400,
                        fontSize: "1.2rem",
                      }}
                    />
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid xs={12} sm={6} item></Grid>
          </Grid>

          <Grid xs={12} sm={6}>
            <Box className={classes.centerContainer}>
              <Box>
                <Typography
                  style={{
                    color: "#FAFAFA",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                    marginBottom: "1.2rem",
                  }}
                  className={classes.text}
                >
                  CONTACT WITH US
                </Typography>
                <Typography
                  style={{
                    color: "#FAFAFA",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Toll-Free
                </Typography>
                <Typography
                  style={{
                    color: "#FAFAFA",
                    fontWeight: 400,
                    fontSize: "1rem",
                  }}
                >
                  +1(877) 769 3745 (In Canada)
                </Typography>
                <Typography
                  style={{
                    marginTop: "1rem",
                    color: "#FAFAFA",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  style={{
                    color: "#FAFAFA",
                    fontWeight: 400,
                    fontSize: "1rem",
                  }}
                >
                  info@northwesternimmigration.com
                </Typography>
                <Box style={{ display: "flex" }}>
                  <IconButton>
                    <Tooltip title="Facebook">
                      <img src={facebook} className={classes.socialMediaIcon} />
                    </Tooltip>
                  </IconButton>
                  <IconButton>
                    <Tooltip title="Skype">
                      <img src={skype} className={classes.socialMediaIcon} />
                    </Tooltip>
                  </IconButton>
                  <IconButton>
                    <Tooltip title="Instagram">
                      <img src={ig} className={classes.socialMediaIcon} />
                    </Tooltip>
                  </IconButton>
                  <IconButton>
                    <Tooltip title="WhatsApp">
                      <img src={whatsapp} className={classes.socialMediaIcon} />
                    </Tooltip>
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12}>
              <Box style={{display:"flex",justifyContent:"space-around", margin:"0 1rem 0 1rem", borderTop:"1.2px solid #C9C9C9"}}>
                  <Typography style={{color:"white",margin:"1rem 0",fontSize:"0.8rem",fontWeight:"300"}}>Copyright © 2020 northwestern Global Immigration. All rights reserved. 
                      </Typography>
              </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

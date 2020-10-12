/*
 * @Author: Dongchen Xie
 * @Date: 2020-10-12 08:21:44
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-10-12 18:07:23
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
import logoH from "../images/immgration-logo-2000-566.png";
import vi from "../images/vietnam.png";
import ca from "../images/canada.png";
import grey from "@material-ui/core/colors/grey";
import Tooltip from "@material-ui/core/Tooltip";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import lang from "../langaguage";
import homeBanner from "../images/home-banner-2000-1333.jpg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import logoV from "../images/immgration-logo-vertical-2000-1163.png";
import Carousel from "./component/carousel";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";
import parallaxImage from "../images/IMG_5358_64.jpg";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mobileNavControl: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  desktopNavControl: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  contactUsBtn: {
    color: "white",
    fontWeight: 600,
    padding: "0.2rem 1rem 0.2rem 0.6rem",

    border: "3px solid #FAFAFA",

    backgroundSize: "750px 300px",

    transition: " 0.3s ease-out",
    backgroundPosition: "0px 150px",
    fontSize: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  bannerContianer: {
    background: `url(${homeBanner}) no-repeat  center`,
    backgroundSize: "cover",
    height: "50vh",
  },
  bannerTitle: {
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  centerContainer: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  centerContainerFixed: {
    display: "flex",
    justifyContent: "space-around",
  },
  serviceTitle: {
    color: "#3c3950",
    fontSize: "1.5rem",
  },
  serviceText: {
    color: "#5f727F",

    fontSize: "1.2rem",
  },
  serviceList: {
    margin: "0.5rem 0",
  },
  contactUsBtn2: {
    color: "white",
    fontWeight: 600,
    padding: "0.7rem 1.8rem 0.7rem 1.8rem",

    border: "3px solid #FAFAFA",//dsf

    backgroundSize: "750px 300px",
    backgroundColor: "#C9A850",
    transition: " 0.3s ease-out",
    backgroundPosition: "0px 150px",
    fontSize: "1rem",
    "&:hover": {
      color: "#343434",
    },
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  const [value, setValue] = React.useState(0);
  const [services, setServices] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const langCode = useStore((s) => s.language);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getService = async () => {
    const result = await axios({
      url:
        "https://wordpress.northwesternimmigration.com/wp-json/wp/v2/services",
      params: {
        lang: langCode,
      },
    });
    if (result.status == 200) {
      setServices(result.data);
    }
  };
  const getNews = async () => {
    const result = await axios({
      url: "https://wordpress.northwesternimmigration.com/wp-json/wp/v2/blogs",
      params: {
        lang: langCode,
        per_page: 3,
      },
    });
    if (result.status == 200) {
      setNews(result.data);
    }
  };
  React.useEffect(() => {
    getService();
    getNews();
  }, [langCode]);
  return (
    <>
      <Box className={classes.bannerContianer}>
        <Container>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <Typography
              style={{
                margin: "10vh auto 20vh auto",
                color: "#FAFAFA",
                fontWeight: 500,
                display: "inline-block",
                textAlign: "center",
              }}
              className={classes.bannerTitle}
            >
              {lang.home_banner_text[langCode]}
            </Typography>
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <ButtonBase
              component={Link}
              to={`/${langCode}/contact`}
              className={classes.contactUsBtn}
            >
              <Typography
                style={{
                  margin: "0.5rem 1rem 0.5rem 0.5rem",

                  fontWeight: 500,
                  display: "inline-block",
                }}
              >
                {lang.home_banner_contact[langCode]}
              </Typography>
              <MailOutlineIcon
                style={{
                  margin: "0.5rem 0.5rem 0.5rem 0.5rem",

                  fontWeight: 500,
                  display: "inline-block",
                }}
              ></MailOutlineIcon>
            </ButtonBase>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "2rem 0",
          }}
        >
          <img src={logoV} style={{ width: "350px", height: "204.6px" }} />
        </Box>
      </Container>
      <Carousel />
      <Container style={{ paddingBottom: "2rem" }}>
        <Grid container>
          <Grid xs={12} md={4}>
            <Box className={classes.centerContainer}>
              <Box>
                <Typography className={classes.serviceTitle}>
                  {lang.home_perma_service[langCode]}
                </Typography>
                <ul className={classes.serviceText}>
                  {services
                    .filter((v) => {
                      if (v.service_type) {
                        return v.service_type.indexOf(73) > -1;
                      }
                      return false;
                    })
                    .map((v) => {
                      return (
                        <li className={classes.serviceList}>
                          <Typography>{v.title.rendered}</Typography>
                        </li>
                      );
                    })}
                </ul>
                <Typography className={classes.serviceText}>
                  See More ...
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={4}>
            <Box className={classes.centerContainer}>
              <Box>
                <Typography className={classes.serviceTitle}>
                  {lang.home_temp_service[langCode]}
                </Typography>
                <ul className={classes.serviceText}>
                  {services
                    .filter((v) => {
                      if (v.service_type) {
                        return v.service_type.indexOf(74) > -1;
                      }
                      return false;
                    })
                    .map((v) => {
                      return (
                        <li className={classes.serviceList}>
                          <Typography>{v.title.rendered}</Typography>
                        </li>
                      );
                    })}
                </ul>
                <Typography className={classes.serviceText}>
                  See More ...
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={4}>
            <Box className={classes.centerContainer}>
              <Box>
                <Typography className={classes.serviceTitle}>
                  {lang.home_citizen_service[langCode]}
                </Typography>
                <ul className={classes.serviceText}>
                  {services
                    .filter((v) => {
                      if (v.service_type) {
                        return v.service_type.indexOf(75) > -1;
                      }
                      return false;
                    })
                    .map((v) => {
                      return (
                        <li className={classes.serviceList}>
                          <Typography>{v.title.rendered}</Typography>
                        </li>
                      );
                    })}
                </ul>
                <Typography className={classes.serviceText}>
                  See More ...
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Parallax
        blur={1}
        bgImage={parallaxImage}
        bgImageAlt="Immigration"
        strength={900}
      >
        <div style={{ height: "35vh" }} />
      </Parallax>
      <Container>
        <Box className={classes.centerContainerFixed}>
          <Box>
            <Typography
              style={{
                fontSize: "2rem",
                color: "#3c3950",
                margin: "2.5rem 0 1rem 0",
              }}
            >
              {" "}
              {lang.home_about_us[langCode]}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.centerContainerFixed}>
          <Box>
            <Typography
              style={{ fontSize: "1.4rem", color: "#3c3950", margin: "1rem 0" }}
            >
              {" "}
              {lang.home_about_us_sub[langCode]}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.centerContainerFixed}>
          <Box>
            <Typography
              style={{ fontSize: "1.1rem", color: "#5F727F", margin: "1rem 0" }}
            >
              {" "}
              {lang.home_about_us_text[langCode]}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.centerContainerFixed}>
          <Box>
            <Typography
              style={{
                fontSize: "1.4rem",
                fontWeight: 500,
                color: "#C9A850",
                margin: "1rem 0",
              }}
            >
              {" "}
              {lang.home_need_help[langCode]}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.centerContainerFixed}>
          <Box>
            <Typography
              style={{
                fontSize: "1.1rem",
                color: "#3C3950",
                margin: "1rem 0 2rem 0",
              }}
            >
              {" "}
              {lang.home_need_help_phone[langCode]}
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box style={{ background: "#3C3950" }}>
        <Box className={classes.centerContainerFixed}>
          <Box>
            <Typography
              style={{
                fontSize: "2rem",
                color: "#FAFAFA",
                margin: "3rem 0 3rem 0",
              }}
            >
              {" "}
              {lang.home_review_title[langCode]}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container>
        <Grid container style={{ padding: "3rem 0 3rem 0" }}>
          {lang.home_reviews.map((v) => (
            <>
              <Grid item xs={12} md={8}>
                <Box style={{ display: "flex", marginBottom: "2rem" }}>
                  <FormatQuoteIcon
                    style={{
                      transform: "rotate(-180deg)",
                      color: "#7F8B96",
                      fontSize: "2.5rem",
                    }}
                  />
                  <Typography style={{ color: "#3C3950", fontSize: "1.4rem" }}>
                    {v.review[langCode]}
                  </Typography>

                  <FormatQuoteIcon
                    style={{ color: "#7F8B96", fontSize: "2.5rem" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginBottom: "2rem",
                  }}
                >
                  <Typography style={{ color: "#3C3950", fontSize: "1.4rem" }}>
                    {v.author[langCode]}
                  </Typography>
                  <Box
                    style={{
                      margin: "auto 3rem auto 0",
                      width: "6rem",
                      height: 0,
                      border: "1px solid #7F8B96 ",
                    }}
                  ></Box>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
      <Box style={{ background: "#EAECED" }}>
        <Container>
          <Box className={classes.centerContainerFixed}>
            <Box>
              <Typography
                style={{
                  fontSize: "2rem",
                  color: "#3C3950",
                  margin: "3rem 0 3rem 0",
                }}
              >
                {lang.home_lastest_news[langCode]}
              </Typography>
            </Box>
          </Box>
          <Grid container>
            {news.map((v) => {
              if (v.title)
                return (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{ padding: "0 2rem 0 2rem", marginBottom: "2rem" }}
                  >
                    <Box className={classes.centerContainerFixed}>
                      <Box
                        style={{
                          backgroundImage: `url(${
                            v.acf.cover_image && v.acf.cover_image.sizes.large
                          })`,
                          minWidth: "250px",
                          minHeight: "250px",
                          width: "70%",

                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></Box>
                    </Box>
                    <Box className={classes.centerContainerFixed}>
                      <Box>
                        <Typography
                          style={{
                            fontSize: "1.2rem",
                            color: "#3C3950",
                            margin: "1.5rem 0 0.5rem 0",
                          }}
                        >
                          {v.title.rendered}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.centerContainerFixed}>
                      <Box>
                        <Typography
                          style={{
                            fontSize: "1rem",
                            color: "#3C3950",
                            margin: "1rem 0 1rem 0",
                          }}
                        >
                          {v.acf.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography className={classes.serviceText}>
                      See More ...
                    </Typography>
                  </Grid>
                );
            })}
          </Grid>
        </Container>
      </Box>
      <Box style={{ height: "200px" }}>
        <Box
          className={classes.centerContainerFixed}
          style={{ alignItems: "center", height: "100%" }}
        >
          <ButtonBase
            className={classes.contactUsBtn2}
            style={{ margin: "auto" }}
            component={Link}
            to={`/${langCode}/contact`}
          >
            {lang.home_contact_us_btn[langCode]}
          </ButtonBase>
        </Box>
      </Box>
    </>
  );
}
// export default Navbar;

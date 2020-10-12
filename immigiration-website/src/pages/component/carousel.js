/*
 * @Author: Dongchen Xie
 * @Date: 2020-10-12 13:53:24
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-10-12 14:09:31
 * @Description: file content
 */
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@material-ui/core";
import bgImage1 from "../../images/canada-passport.jpg";
import Container from "@material-ui/core/Container";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import useStore from "../../zustand/zustand";
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
  bookConsultationBtn: {
    color: "white",
    fontWeight: 600,
    padding: "0.6rem 1.5rem 0.6rem 0.8rem",
    margin: "0.4rem 2rem 0.4rem 0",
    background:
      "linear-gradient(90deg,#C9A850 5% ,#FAFAFA 15% , #FAFAFA 45% ,#C9A850 60%);",
    backgroundSize: "750px 200px",
    borderRadius: "2px",
    transition: " 0.3s ease-out",
    backgroundPosition: "150px",
    "&:hover": {
      backgroundPosition: "300px",
      color: "#343434",
    },
  },
}));
function Example(props) {
  var items = [
    {
      name: "Service 1",
      description: "Probably the most random thing you have ever seen!",
      bgImage: bgImage1,
    },
    {
      name: "Service 2",
      description: "Hello World!",
      bgImage: bgImage1,
    },
  ];

  return (
    <Carousel navButtonsAlwaysVisible>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const langCode = useStore((s) => s.language);
  const classes = useStyles();
  return (
    <Box style={{ backgroundImage: `url(${props.item.bgImage})`,backgroundSize:"cover",backgroundPosition:"center", minHeight:"40vh" }}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Box>
  );
}
export default Example;

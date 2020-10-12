/*
 * @Author: Dongchen Xie
 * @Date: 2020-10-12 08:21:44
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-10-12 13:01:09
 * @Description: file content
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useStore from '../zustand/zustand'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import logoH from "../images/immgration-logo-2000-566.png"
import vi from "../images/vietnam.png"
import ca from "../images/canada.png"
import grey from "@material-ui/core/colors/grey"
import Tooltip from "@material-ui/core/Tooltip"
import ButtonBase from "@material-ui/core/ButtonBase"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import lang from "../langaguage"
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
        [theme.breakpoints.down('sm')]: {
            display: "flex"
        },
    },
    desktopNavControl: {
        display: "block",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    bookConsultationBtn: {
        color: "white",
        fontWeight: 600,
        padding: "0.6rem 1.5rem 0.6rem 0.8rem",
        margin: "0.4rem 2rem 0.4rem 0",
        background: "linear-gradient(90deg,#C9A850 5% ,#FAFAFA 15% , #FAFAFA 45% ,#C9A850 60%);",
        backgroundSize: "750px 200px",
        borderRadius: "2px",
        transition: " 0.3s ease-out",
        backgroundPosition: "150px",
        '&:hover': {
            backgroundPosition: "300px",
            color: "#343434"
        }
    }
}));


export default function ProminentAppBar() {
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    const [value, setValue] = React.useState(0);
    const langCode = useStore(s => s.language);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <Container>
            service page
        </Container>
          
        </>

    );
}
// export default Navbar;

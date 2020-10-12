/*
 * @Author: Dongchen Xie
 * @Date: 2020-10-12 08:21:44
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-10-12 13:13:21
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
const Navbar = () => {
    const langCode = useStore(s => s.language);
    return (
        <div>
            <Link to={"/en"}>
                English
            </Link>
            <Link to={"/vi"}>
                Vietnamese
            </Link>
            <Link to={`/${langCode}/page`}>
                Normal Page
            </Link>
        </div>
    );
}

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: "120px",
        height: 10,
        '&': {
            marginTop: "-20",
            height: 3,
        },
        '& > span': {
            maxWidth: 45,
            width: '100%',
            backgroundColor: "rgb(201,168,80)",


        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);


const StyledTab = withStyles((theme) => ({

    root: {
        textTransform: 'none',
        color: '#343434',
        width: "80px",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: "1rem",
        fontWeight: 500,
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
        margin: 0,
        padding: 0,
        '&:hover': {
            opacity: 1,
        },
        '&$selected': {
            color: "rgb(201,168,80)",
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: "rgb(201,168,80)",
        },

        minWidth: 80, // a number of your choice
        width: 120, // a number of your choice

    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

// Tabpanel
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
            {/* moblie nav */}
            <AppBar position="sticky" color={grey[50]} elevation={0} className={classes.mobileNavControl}>
                <Box style={{ margin: "auto" }}>
                    <img src={logoH} style={{ width: "55vw", margin: "0.5rem auto" }} />
                </Box>
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>

                    <Box style={{ display: "flex" }}>
                        <Typography style={{ fontWeight: 450, fontSize: "0.9rem", margin: "auto 1rem" }}>MENU</Typography>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon style={{ fontSize: "1.5rem" }} />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton component={Link} to={"/vi"}>
                            <Tooltip title="Vietnamese" >
                                <img src={vi} style={{ height: "1.5rem", width: "1.5rem" }} />
                            </Tooltip>

                        </IconButton>
                        <IconButton component={Link} to={"/en"}>

                            <Tooltip title="English">
                                <img src={ca} style={{ height: "1.5rem", width: "1.5rem" }} />
                            </Tooltip>

                        </IconButton>

                    </Box>
                </Toolbar>
            </AppBar>
            {/* desktop nav */}
            <AppBar position="sticky" color={grey[50]} elevation={0} className={classes.desktopNavControl}>
                <Box style={{ display: "flex" }}>
                    <Box style={{ margin: "1.2rem" }}>
                        <img src={logoH} style={{ width: "300px", maxWidth: "30vw", margin: "0.5rem" }} />
                    </Box>
                    <Box style={{ width: "100%" }}>
                        <Box style={{ display: "flex", flexDirection: "row-reverse", marginRight: "3.5rem" }}>

                            <Box>
                                <IconButton component={Link} to={"/vi"} >
                                    <Tooltip title={lang.nav_lang_vi[langCode]} >
                                        <img src={vi} style={{ height: "1.5rem", width: "1.5rem" }} />
                                    </Tooltip>

                                </IconButton>
                                <IconButton component={Link} to={"/en"}>

                                    <Tooltip title={lang.nav_lang_en[langCode]}>
                                        <img src={ca} style={{ height: "1.5rem", width: "1.5rem" }} />
                                    </Tooltip>

                                </IconButton>

                            </Box>
                            <ButtonBase className={classes.bookConsultationBtn}>
                                <Typography style={{ fontWeight: 400, marginRight: "1.5rem" }}>
                                {lang.nav_book_btn[langCode]}
                                </Typography>
                                < ArrowForwardIosIcon style={{ fontSize: "1.4rem" }} />

                            </ButtonBase>
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row-reverse", margin: "1rem 2.5rem auto 0" }}>
                            <IconButton >

                                <Tooltip title="Seach">
                                    <SearchIcon style={{fontSize:"2.5rem"}}/>
                                </Tooltip>

                            </IconButton>
                            <StyledTabs
                                value={value}
                                onChange={handleChange}
                                aria-label="styled tabs example"
                                style={{margin:"auto 0"}}
                                TabIndicatorProps={{
                                    style: {
                                        height: "10px",
                                    }
                                }}>
                                <StyledTab label={lang.nav_home[langCode]} autoFocus component={Link} to={`/${langCode}/`}  {...a11yProps(0)} />
                                <StyledTab label={lang.nav_about_us[langCode]} component={Link} to={`/${langCode}/about`} {...a11yProps(1)} />
                                <StyledTab label={lang.nav_service[langCode]} component={Link} to={`/${langCode}/service`} {...a11yProps(3)} />
                                <StyledTab label={lang.nav_blog[langCode]} component={Link} to={`/${langCode}/blog`}  {...a11yProps(4)} />
                                <StyledTab label={lang.nav_contact_us[langCode]} component={Link} to={`/${langCode}/contact`}  {...a11yProps(5)} />
                            </StyledTabs>

                        </Box>

                    </Box>
                </Box>

            </AppBar>
        </>

    );
}
// export default Navbar;

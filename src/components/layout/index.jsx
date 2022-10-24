import React, { useEffect, useState } from "react";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  InputBase,
  Switch,
} from "@material-ui/core";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import People from "../../assets/people.jpg";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(24, 24, 24, 1)",
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 1, 1, 6),
    },
  },
  sidebar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(24, 24, 24, 1)",
    marginLeft: 10,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  secondInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function Layout(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [themes, setThemes] = useState(
    localStorage.getItem("themes") || "light"
  );

  const toggleTheme = () => {
    themes === "light" ? setThemes("dark") : setThemes("light");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    document.body.className = themes;
    localStorage.setItem("themes", themes);
  }, [themes]);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <div className={classes.sidebar}>
        <div className="icon">
          <BorderAllIcon fontSize="large" />
        </div>
        <div className="icon">
          <ShowChartIcon fontSize="large" />
        </div>
        <div className="icon">
          <AssignmentIcon fontSize="large" />
        </div>
        <div className="icon">
          <SettingsOutlinedIcon fontSize="large" />
        </div>
        <div className="icon">
          <ListAltOutlinedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" className="appBar">
        <div className="appbarContent">
          <div className="searchContainer">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <div className="menuIcon">
                <MenuIcon />
              </div>
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.input}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.secondInput,
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar className="avatar" alt="Trevor Henderson" src={People} />
            <Switch
              onChange={() => toggleTheme()}
              checked={themes === "light"}
              color="default"
            />
          </div>
        </div>
      </AppBar>
      <nav className="drawer">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Layout;

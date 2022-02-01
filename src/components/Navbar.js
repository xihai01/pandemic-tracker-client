import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import AdjustIcon from "@material-ui/icons/Adjust";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    fontFamily: "Nunito",
  },
  appbar: {
    backgroundColor: "#D37506"
  },
  appbarWrapper: {
    width: "85%",
    margin: "0 auto",
  },
  appbarTitle: {
    display: "flex",
    flexGrow: "1",
    fontSize: "2.5em"
  },
  icon: {
    color: "#fff",
    fontSize: "2.5rem",
  },

  dotcolor: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    marginLeft: "0.25em",
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    textAlign: "center",
  },

  goDown: {
    color: "#fff",
    fontSize: "3.5rem",
  },
  menuWrapper: {},
  link: {
    color: "#fff",
    fontFamily: "Lexend Deca",
    fontWeight: "800",
    fontSize: "1.5rem",
    marginTop: "15px",
  },

  close: {
    backgroundColor: "#D37506",
    minWidth: "250px",
    alignItems: "left",
    color: "#fff",
  },

  chevronIcon: {
    color: "#fff",
  },
  listcontainer: {
    backgroundColor: "#D37506",
    height: "100%",
  },
  about: {fontFamily: "Lexend Deca",
  fontWeight: "300",
  alignItems: "center",
  marginRight: "4.5px",
  marginLeft: "15px",
  marginTop: "280px",
  color: "#fff",},
}));
export default function Nav() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Map", href: "/map" },
    { name: "Tweet Us", href: "https://twitter.com/pandemicpt" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Pandemic Tracker
            <span className={classes.dotcolor}>
              <AdjustIcon />
            </span>
          </h1>
          <IconButton onClick={() => setOpen(true)}>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.menuwrapper}>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div onClick={() => setOpen(false)} className={classes.close}>
            <IconButton>
              <ChevronRightIcon className={classes.chevronIcon} />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.listcontainer}>
            {navigationLinks.map((item) => (
              <ListItem>
                <Link
                  className={classes.link}
                  color="textPrimary"
                  varaint="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
            <br />
            <div className={classes.about}>
              <h2>
                {" "}
                About Us <br />{" "}
              </h2>
              March 2020 our lives changed forever.
              <br /> Life as we knew it became a distant memory <br />
              one that we long for. It was diffcult to <br />
              accept our new normal.Difficult to understand that <br />
              after almost two long years there is still no end <br />
              in sight. With the constant open <br />
              and closing of many businesses it became diffcult to <br />
              keep up to what is open and closed. <br />
              With the Pandemic Tracker, our hope is to <br />
              provide relief to every Ontario resident by simply <br />
              and easily informing them of Ontario's <br />
              Covid restrictions. <br />
              <p>Follow us on twitter @pandemictracker </p>
            </div>
          </List>
        </SwipeableDrawer>
      </div>
    </div>
  );
}

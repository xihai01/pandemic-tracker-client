import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Nav from "./Nav";
import CardBox from "./CardBox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  homepic: {
    minHeight: "100vh",
    backgroundImage: `url("/images/bg.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#84c2d4",
  },

  icon: {
    color: "#D37506",
    fontSize: "2.5em",
  },

  dotcolor: {
    color: "#D37506",
    fontSize: "2.5em",
  },

  goDown: {
    color: "#84c2d4",
    fontSize: "3.5rem",
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <div className="root-container">
      <div className={classes.homepic}>
        <CssBaseline />
        <Nav />
      </div>
      <div id="article-scroll" className="home-article">
        <br />
        <h3 className={classes.aboutTitle}>Keeping you informed</h3>
        <h2>
          Our hope is to provide relief to every Ontario resident by simply and
          easily informing them of Ontario's Covid restrictions.
        </h2>

        <Scroll to="card-scroll" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </div>
      <CardBox />
    </div>
  );
}

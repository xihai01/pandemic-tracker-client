
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grow } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Particles from 'react-tsparticles'
import { particlesConfig } from "./particles-config.js";
// import "./imagecardstyles.scss";

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    display: "flex",
    alignItems: "stretch",
    flex: 1,
    maxWidth: 645,
    margin: "20px",
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19)",
    justifyContent: "space-around",
    borderRadius: "15px",
    backgroundColor: "#fff",
    opacity: "8%",
    backdropFilter: "blur(5px)",
  },

  media: {
    height: 440,
    width: "100%",
    borderRadius: "15px 15px 50px 30px",
  },

  title: {
    fontFamily: "Lexend Deca",
    fontWeight: "800",
    textAlign: "center",
    fontSize: "2rem",
    color: "#D37506",
  },

  desc: {
    fontFamily: "Lexend Deca",
    fontWeight: "400",
    fontSize: "1.1rem",
    color: "#000000",
    padding: "inherit",
  },

  content: {
    // display: "flex",
    // flex: 1,
    // flexDirection: "column",
    marginTop: "30px",
  },

  buttonContainer: {
    marginTop: "15px",
    borderColor: "#D37506",
    border: "solid",
    textAlign: "center",
    borderRadius: "15px",
  },
  button: {
    fontFamily: "Lexend Deca",
    width: "100%",
    color: "#D37506",
    fontWeight: "bold",
    fontSize: "1rem",
    borderRadius: "15px",
  },
});

export default function ImageCard({ pic, checked, buttonName, hrefLocation }) {
  const classes = useStyles();

  return (
    <Grow in={checked} timeout={500}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={pic.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent classes={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {pic.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {pic.description}

          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="none" href={hrefLocation} className={classes.button}>
              {buttonName}
            </Button>
            </div>
        </CardContent>
      </Card>
    </Grow>

  );
}

/* export default function ImageCard({ pic, checked, buttonName, hrefLocation }) {
  const classes = useStyles();

  return (

    <Grow in={checked} timeout={500}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={pic.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent classes={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {pic.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {pic.description}
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              variant="none"
              href={hrefLocation}
              className={classes.button}
            >
              {buttonName}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grow>

  );
} */



/*  function Particlesbg({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <Particles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </div>
  );
} */



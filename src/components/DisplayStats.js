import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MasksIcon from "@mui/icons-material/Masks";
import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@mui/material";
import "./loading.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    fontFamily: "Nunito",
  },

  gridItem: {
    width: "100%"
  },

  stageone: {
    color: "#ff0000",
  },
  stagetwo: {
    color: "#FFA500",
  },
  stagethree: {
    color: "#228B22",
  },

  box: {
    display: "flex",
    flexGrow: "1",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  headtitle: {
    marginLeft: "18px",
    color: "#ba000d",
  },
}));

export const DisplayStats = function (props) {
  const { status, restriction } = props;
  const classes = useStyles();
  if (!status && Object.keys(restriction).length !== 0) {
    console.log(restriction);
    return (
      <Grid sx={{ padding: "0px" }} item xs={4} className={classes.gridItem}>
        <Item>
          <h3 id="covid-stats">
            Covid Statistics <MasksIcon sx={{ transform: "scale(2.0)" }} />{" "}
          </h3>
        </Item>
        <Item>
          <p className="stats-style">
            Health Region: {restriction.stats.health_region}
          </p>
        </Item>
        <Item>
          <p className="stats-style">Province: {restriction.stats.province}</p>
        </Item>
        <Item>
          <p className="stats-style">
            Cases:{" "}
            {restriction.stats.cases === 0.0
              ? "Unavailable"
              : restriction.stats.cases}
          </p>
        </Item>
        <Item>
          <p className="stats-style">
            Total Cases:{" "}
            {restriction.stats.cumulative_cases === 0.0
              ? "Unavailable"
              : restriction.stats.cumulative_cases}
          </p>
        </Item>
        <Item>
          <p className="stats-style">
            Current Deaths:{" "}
            {restriction.stats.deaths === 0.0
              ? "Unavailable"
              : restriction.stats.deaths}
          </p>
        </Item>
        <Item>
          <p className="stats-style">
            Total Deaths:{" "}
            {restriction.stats.cumulative_deaths === 0.0
              ? "Unavailable"
              : restriction.stats.cumulative_deaths}
          </p>
        </Item>
      </Grid>
    );
  } else if (
    Object.keys(restriction).length !== 0 ||
    (status && Object.keys(restriction).length === 0)
  ) {
    return (
      <Grid sx={{ padding: "0px" }} item xs={4} className={classes.gridItem}>
        <Skeleton className="stats-loading" sx={{ paddingRight: "2em" }} variant="rectangular" />
    </Grid>
    )
  }
  return <span></span>;
};

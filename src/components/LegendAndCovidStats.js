
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import MasksIcon from "@mui/icons-material/Masks";
import CircleIcon from "@mui/icons-material/Circle";
import { makeStyles } from "@material-ui/core/styles";
import { DisplayStats } from "./DisplayStats";

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

export default function LegendAndCovidStats(props) {
  const {status, restriction, healthRegionList } = props;
  const classes = useStyles();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
      className={classes.box}
    >

        <Grid
          fontFamily="Lexend Deca"
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="nowrap"
          container
          spacing={3}
        >
          <Grid sx={{padding: "0px"}} item xs={4}>
            <Item>
              <h3 className="legend-title">Legend</h3>
            </Item>
            <Item>
              <p className="legend">
                <CircleIcon className={classes.stageone} /> Stage 1, this area has heavy restrictions and may be in lockdown.             </p>
            </Item>
            <Item>
              <p className="legend">
                <CircleIcon className={classes.stagetwo} /> Stage 2, this area is open with some restrictions in place.       </p>
            </Item>
            <Item>
              <p className="legend">
                <CircleIcon className={classes.stagethree} /> Stage 3, this area is open with little restrictions.
              </p>
            </Item>
          </Grid>
          <Grid item xs="auto">
          <svg className="image">
            <g>{healthRegionList}</g>
          </svg>
          </Grid>
<DisplayStats status={status} restriction={restriction} />
        </Grid>

    </Box>
  );
}

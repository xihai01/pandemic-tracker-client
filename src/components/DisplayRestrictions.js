import * as React from "react";
import { Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import DeckIcon from "@mui/icons-material/Deck";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChurchIcon from "@mui/icons-material/Church";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import AttractionsIcon from "@mui/icons-material/Attractions";
import WcIcon from "@mui/icons-material/Wc";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MasksIcon from "@mui/icons-material/Masks";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "2em",
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  boxSizing: "border-box",
}));
const useStyles = makeStyles((theme) => ({
  cards: {
    backgroundColor: "#829ab1",
    borderRight: " 15px solid #829ab1",
    padding: "10px",
    marginBottom: "50px",
    alignItems: "stretch",
  },
  title: {
    fontFamily: "Lexend Deca",
    fontWeight: "800",
    fontSize: "2em",
    color: "#829ab1",
  },
  para: {
    fontFamily: "Lexend Deca",
    fontSize: "1.2em",
    padding: "2em",
  },
  icon: {
    transform: "scale(1.5)"
  },
  tr: {
    background: "#f1f1f1",
    '&:hover': {
       background: "#ffa500",
       boxShadow: " rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
    },
  }
}));
/**
 *
 * @param {*} status
 * Display covid restrictions and stats or a loading skeleton if data is still being fetched
 */
export const DisplayRestrictions = function (props) {
  const { status, restriction } = props;
  const classes = useStyles();
  if (!status && Object.keys(restriction).length !== 0) {
    console.log(restriction);
    return (
      <>
        <Container sx={{ marginTop: "1.5em", flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <LocationOnIcon className={classes.icon} />
                <h3 className={classes.title}>Region Name</h3>
                <p className={classes.para}>
                  {restriction.restrictions.region_name}
                </p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <HomeIcon className={classes.icon} />
                <h3 className={classes.title}>Max Indoor</h3>
                <p className={classes.para}>
                  {restriction.restrictions.max_indoor_gathering} people
                </p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <DeckIcon className={classes.icon} />
                <h3 className={classes.title}>Max Outdoor</h3>
                <p className={classes.para}>
                  {restriction.restrictions.max_outdoor_gathering} people
                </p>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <RestaurantMenuIcon className={classes.icon} />
                <h3 className={classes.title}>Restaurants</h3>
                <p className={classes.para}>
                  {restriction.restrictions.food_establishments}
                </p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <AddShoppingCartIcon className={classes.icon} />
                <h3 className={classes.title}>Retail</h3>
                <p className={classes.para}>
                  {restriction.restrictions.retail}
                </p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <ChurchIcon className={classes.icon} />
                <h3 className={classes.title}>Ceremony</h3>
                <p className={classes.para}>
                  {restriction.restrictions.ceremony}
                </p>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <AttractionsIcon  className={classes.icon}/>
                <h3>
                  <h3 className={classes.title}>Entertainment</h3>
                </h3>
                <p className={classes.para}>
                  {restriction.restrictions.entertainment}
                </p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <DownhillSkiingIcon className={classes.icon} />
                <h3 className={classes.title}>Sports & Recreation</h3>
                <p className={classes.para}>
                  {restriction.restrictions.sports_recreational}
                </p>
              </Item>
            </Grid>
            <Grid item xs={4} className={classes.cards}>
              <Item className={classes.tr}>
                <WcIcon className={classes.icon}/>
                <h3 className={classes.title}>Personal Care</h3>
                <p className={classes.para}>
                  {" "}
                  {restriction.restrictions.personal_care}
                </p>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  } else if (
    Object.keys(restriction).length !== 0 ||
    (status && Object.keys(restriction).length === 0)
  ) {
    return (
      <>
        <Skeleton width={1500} />
        <Skeleton width={1500} />
        <Skeleton width={1500} />
      </>
    );
  }
  return <span></span>;
};
// {/* /**
//  *
//  * @param {*} status
//  * Display covid restrictions and stats or a loading skeleton if data is still being fetched
//  */
// export const DisplayRestrictions = function (props) {
//   const { status, restriction } = props;
//   if (!status && Object.keys(restriction).length !== 0) {
//     console.log(restriction);
//     return (
//       <> */}
//         <div className="info-box">
//           <div className="rowForRestriction">
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img className="imageForCard" src="images/test.jpeg" alt="Region Name" />
//                 <h3>Region Name</h3>
//                 <p>{JSON.stringify(restriction.restrictions.region_name)}</p>
//               </div>
//             </div>
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Max Indoor Gathering:</h3>
//                 <p>
//                   {JSON.stringify(
//                     restriction.restrictions.max_indoor_gathering
//                   )}{" "}
//                   people
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="rowForRestriction">
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Max Outdoor Gathering:</h3>
//                 <p>
//                   {JSON.stringify(
//                     restriction.restrictions.max_outdoor_gathering
//                   )}{" "}
//                   people
//                 </p>
//               </div>
//             </div>
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Retail:</h3>
//                 <p>{JSON.stringify(restriction.restrictions.retail)}</p>
//               </div>
//             </div>
//           </div>

//           <div className="rowForRestriction">
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Ceremony:</h3>
//                 <p>{JSON.stringify(restriction.restrictions.ceremony)}</p>
//               </div>
//             </div>
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Sports & Recreation:</h3>
//                 <p>
//                   {" "}
//                   {JSON.stringify(restriction.restrictions.sports_recreational)}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="rowForRestriction">
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Entertainment: </h3>
//                 <p>{JSON.stringify(restriction.restrictions.entertainment)}</p>
//               </div>
//             </div>
//             <div className="columnForRestriction">
//               <div className="cardForRestriction">
//                 <img src="" alt="Region Name" />
//                 <h3>Personal Care:</h3>
//                 <p> {JSON.stringify(restriction.restrictions.personal_care)}</p>
//               </div>
//             </div>
//           </div>

//           <div className="singleRestrictionCard">
//             <img src="" alt="Region Name" />
//             <div className="containerForRestriction">
//               <h4>
//                 <b> Covid Statistics: </b>
//               </h4>
//               <p>{JSON.stringify(restriction.stats)}</p>
//             </div>
//           </div>
//         </div>

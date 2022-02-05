import { useReducer, useEffect } from "react";
import axios from "axios";
import adminReducer, { SET_DASHBOARD } from "reducer/admin_reducer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Grid,
  Container,
  Button,
  Paper,
  ListItemIcon,
  List,
  ListItemText,
  ListItem,
  makeStyles,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import { AccountCircleRounded } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import { format } from "date-fns";
import { getAuth } from "helpers/getAuth";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DashboardBugCard from "./DashboardBugCard";
import { Icon } from "@iconify/react";
import CardStages from "./CardStages";
import CardRegions from "./CardRegions";
import CardAdmin from "./CardAdmin";

const drawerWidth = 180;
const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
      background: "#343a40",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
      borderRight: "3px solid #005249",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      backgroundColor: "rgba(255, 255, 255, .15)",
      backdropFilter: "blur(5px)",
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
  };
});

export default function AdminBoard({ children }, props) {
  const { updateCards } = props.state;
  const [state, dispatch] = useReducer(adminReducer, {
    dashboard: [],
    loading: true,
    error: null,
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!getAuth()) {
      return navigate("/admin");
    }

    axios
      .get("/admin/dashboard", { withCredentials: true })
      .then((res) => {
        dispatch({ type: SET_DASHBOARD, dashboard: res.data });
      })
      .catch(() => console.log(`Unable to fetch API data`));
  }, [updateCards]);

  function clearAuth() {
    localStorage.clear();
    axios.get("/admin/logout").then(() => {
      navigate("/admin");
    });
  }

  const classes = useStyles();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <Icon icon="dashicons:clipboard" width="26" height="26" />,
      path: "/adminboard",
    },

    {
      text: "Stages",
      icon: <Icon icon="ant-design:alert-filled" width="24" height="24" />,
      path: "/stages",
    },

    {
      text: "Regions",
      icon: <Icon icon="healthicons:rural-post" width="26" height="26" />,
      path: "/regions",
    },

    {
      text: "Users",
      icon: <Icon icon="dashicons:groups" width="26" />,
      path: "/users",
    },

    {
      text: "Chat",
      icon: <Icon icon="bx:bx-chat" width="28" height="28" />,
      path: "/chat",
    },

    {
      text: "Team",
      icon: <Icon icon="ph:microsoft-teams-logo-fill" width="28" height="28" />,
      path: "/team",
    },

    {
      text: "Security",
      icon: <Icon icon="dashicons:privacy" width="26" height="26" />,
      path: "/security",
    },
  ];
  return (
    <>
      {getAuth() && (
        <div className={classes.root}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
          >
            <Typography className={classes.title} variant="h3">
              Admin
            </Typography>

            {/* list items */}
            <List>
              {menuItems.map((item) => {
                return (
                  <ListItem
                    button
                    key={item.text}
                    onClick={() => {
                      navigate(item.path);
                    }}
                    className={
                      location.pathname === item.path ? classes.active : null
                    }
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                );
              })}
            </List>
          </Drawer>

          <Container>
            {/* Appbar */}
            <AppBar
              className={classes.appbar}
              elevation={0}
              color="transparent"
            >
              <Toolbar>
                <Typography variant="h6" className={classes.date}>
                  Hi,Welcome Back
                </Typography>

                <Toolbar>{format(new Date(), `do MMMM Y`)}</Toolbar>
                {/* <AccountCircleRounded /> */}
                <Icon icon="emojione:flag-for-canada" width="28" />
                <Icon icon="bx:bx-user-circle" width="30" height="30" />
                <Button>
                  <Icon
                    icon="ls:logout"
                    width="28"
                    height="28"
                    onClick={clearAuth}
                    tooltip="logout"
                  />
                </Button>
              </Toolbar>
            </AppBar>
            <div className={classes.toolbar}></div>

            <Grid container spacing={3} elevation={3}>
              <Grid item xs={12} sm={6} md={3}>
                <CardAdmin state={state} />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <CardRegions state={state} />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <CardStages state={state} />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <DashboardBugCard />
              </Grid>
            </Grid>

            <div className={classes.toolbar}></div>
            <div className={classes.page}>{children}</div>
          </Container>
        </div>
      )}
    </>
  );
}

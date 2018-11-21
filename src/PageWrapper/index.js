import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing.unit * 2
  },
  cardActions: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 2
    }
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: 'wrap'
  }
});

function PageWrapper(props) {
  const { classes, children, history } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Wildman's Spices
          </Typography>
          <Button onClick={()=>history.push('/')}>Home</Button>
          <Button>Contact</Button>
          <Button onClick={()=>history.push('/shop')}>Shop</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>{children}</main>
      <footer className={classes.footer}>
        <div>
          <Typography variant="title" align="center" gutterBottom>
            Hours
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            color="textSecondary"
            component="p"
          >
            Monday - Friday
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            color="textSecondary"
            component="p"
          >
            9am-4pm
          </Typography>
        </div>
        <div>
          <Typography variant="title" align="center" gutterBottom>
            Address
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            color="textSecondary"
            component="a"
            href="http://maps.google.com/?q=Wildman Spice Co"
          >
            25956 U.S. Route 33
            New Hampshire, Ohio 45870
          </Typography>
        </div>
        <div>
          <Typography variant="title" align="center" gutterBottom>
          PHONE
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            color="textSecondary"
            component="a"
            href="tel:419.568.7531"
          >
            419.568.7531
          </Typography>
        </div>
      </footer>
    </React.Fragment>
  );
}

PageWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(withStyles(styles)(PageWrapper));

import React, { Children } from "react";
import classNames from "classnames";
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
    display: 'flex',
    justifyContent: 'space-around'
  }
});

function PageWrapper(props) {
  const { classes, children } = props;

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
          <Button>Home</Button>
          <Button>Contact</Button>
          <Button>Shop</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        {children}
      </main>
      <footer className={classes.footer}>
        <div>
          <Typography variant="title" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </div>
        <div>
          <Typography variant="title" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </div>
      </footer>
    </React.Fragment>
  );
}

PageWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageWrapper);

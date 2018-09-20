import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
});

const Home = ({classes}) => {
  return (
    <div className={classes.heroContent}>
      <Typography variant="display3" align="center" color="textPrimary">
        Wildman's Spices
      </Typography>
      <Typography
        variant="title"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Gourmet Spices, Extracts, and Seasonings
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Wildman’s is a historic company with a storied past. We were founded in
        1895 by W.H. Wildman in Norwalk, Ohio. Wildman believed in tradition and
        integrity in everything his new company produced. These convictions led
        to excellence in an otherwise average market and created a difference
        that can still be experienced today. Though the company has moved a few
        times and changed ownership over the years the commitment to W.H.
        Wildman’s founding principles has not. Since 1977 we’ve been blending,
        bottling, and labeling the finest spices, seasonings, and extracts in
        New Hampshire, Ohio. Still a family owned business, our start to finish
        process gives credence to the authenticity and care we put into every
        bottle that leaves our shop. We don’t do it this way because it’s the
        quickest or the easiest, but because we want to continue to produce
        noticeably better flavors. Once you try the Wildman’s brand we know
        you’ll appreciate the difference!
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Home);

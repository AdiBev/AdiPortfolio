import React, { Fragment } from "react";
import PropTypes from "prop-types";

//MaterialUI comps imported here
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";

import SkillsList from "./skills_list";

const styles = theme => ({
  about_container: {
    maxWidth: 950,
    position: "relative",
    top: 100,
    marginLeft: 80,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 20
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: 40
    },
    [theme.breakpoints.up("lg")]: {
      margin: "auto"
    }
  }
});

const AboutPage = props => {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.about_container}>
        <Typography variant="h2" paragraph={true}>
          About
        </Typography>
        <div>
          <Typography variant="subtitle1" paragraph={true}>
            I build responsive websites using CSS3, Sass or using a framework
            like Bootstrap. I also use React to build responsive webapps along
            React I use Redux, Material-UI and styled components.
          </Typography>
          <Typography variant="subtitle1" paragraph={true}>
            I use my knowledge and tools to save time in development, including
            preprocessors and my own custom boilerplates to kick start a
            project.
          </Typography>
          <Typography variant="subtitle1" paragraph={true}>
            I enjoy working as a team member as well as independently. I&#39;m
            always ready to learn new things and apply them in every day work
            life.
          </Typography>
        </div>
        <Divider variant="middle" />
        <SkillsList />
      </div>
    </Fragment>
  );
};

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutPage);

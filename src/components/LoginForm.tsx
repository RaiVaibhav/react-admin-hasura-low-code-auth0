import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import { withStyles, createStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = ({ spacing }) =>
  createStyles({
    button: {
      width: '100%',
    },
    icon: {
      marginRight: spacing.unit,
    },
  });

const LoginForm = ({ classes }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <CardActions>
        <Button
          className={classes.button}
          variant="contained"
          type="submit"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          Login With Auth0
        </Button>
      </CardActions>
    </div>
  );
}

export default withStyles(styles)(LoginForm);
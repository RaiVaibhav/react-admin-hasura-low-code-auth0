import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { ListItemIcon, MenuItem, makeStyles } from '@material-ui/core';
import { MenuItemProps } from '@material-ui/core/MenuItem';
import { Theme } from '@material-ui/core/styles';
import { useAuth0 } from "@auth0/auth0-react";
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import classnames from 'classnames';

interface Props {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  menuItem: {
    color: theme.palette.text.secondary,
  },
  icon: { minWidth: theme.spacing(5) },
}));

const LogoutWithRef: FunctionComponent<
  Props & MenuItemProps<'li', { button: true }>
> = React.forwardRef(function Logout(props, ref) {
  const { className, ...rest } = props;
  const { logout } = useAuth0();
  const classes = useStyles({});
  return (
    <MenuItem
      className={classnames('logout', classes.menuItem, className)}
      onClick={() => logout({ returnTo: window.location.origin })}
      ref={ref}
      {...rest}
    >
      <ListItemIcon className={classes.icon}>
        <ExitIcon />
      </ListItemIcon>
      {'Logout'}
    </MenuItem>
  );
});

LogoutWithRef.propTypes = {
  className: PropTypes.string,
};

export default LogoutWithRef;
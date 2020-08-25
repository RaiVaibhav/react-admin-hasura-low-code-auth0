import React, {
  HtmlHTMLAttributes,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import classnames from 'classnames';
import { Card, Avatar, Theme } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import LockIcon from '@material-ui/icons/Lock';
import { StaticContext } from 'react-router';

import defaultTheme from '../defaultTheme';
import LoginForm from './LoginForm';

interface Props {
  backgroundImage?: string;
  classes?: object;
  className?: string;
  staticContext?: StaticContext;
  theme?: object;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      height: '1px',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage:
        'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
    },
    card: {
      minWidth: 300,
      marginTop: '6em',
    },
    avatar: {
      margin: '1em',
      display: 'flex',
      justifyContent: 'center',
    },
    icon: {
      backgroundColor: theme.palette.secondary[500],
    },
  }),
  { name: 'RaLogin' }
);

const Login: React.FunctionComponent<
  Props & HtmlHTMLAttributes<HTMLDivElement>
> = props => {
  const {
    theme,
    classes: classesOverride,
    className,
    backgroundImage,
  } = props;
  const containerRef = useRef<HTMLDivElement>();
  const classes = useStyles(props);
  const muiTheme = useMemo(() => createMuiTheme(theme), [theme]);
  let backgroundImageLoaded = false;

  const updateBackgroundImage = () => {
    if (!backgroundImageLoaded && containerRef.current) {
      containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
      backgroundImageLoaded = true;
    }
  };

  // Load background image asynchronously to speed up time to interactive
  const lazyLoadBackgroundImage = () => {
    if (backgroundImage) {
      const img = new Image();
      img.onload = updateBackgroundImage;
      img.src = backgroundImage;
    }
  };

  useEffect(() => {
    if (!backgroundImageLoaded) {
      lazyLoadBackgroundImage();
    }
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <div
        className={classnames(classes.main, className)}
        ref={containerRef}
      >
        <Card className={classes.card}>
          <div className={classes.avatar}>
            <Avatar className={classes.icon}>
              <LockIcon />
            </Avatar>
          </div>
          <LoginForm />
        </Card>
      </div>
    </ThemeProvider>
  );
};

Login.defaultProps = {
  theme: defaultTheme,
};

export default Login;
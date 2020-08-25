// @ts-nocheck
import * as React from "react";
import { AppBar, UserMenu, Layout } from 'react-admin';
import Logout from './Logout';

const MyUserMenu = props => (
  <UserMenu {...props} logout={<Logout />} />
);

function MyAppBar(props) {
  return (
    <AppBar {...props} userMenu={<MyUserMenu />} />
  );
} 

function MyLayout(props) {
  return (
    <Layout {...props} appBar={MyAppBar} />
  );
}

export default MyLayout
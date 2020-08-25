
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, UserShow } from '../users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import MyLayout from './CustomLayout';
import { TodoList, TodoEdit, TodoCreate } from '../todos';
import DashBoard from './Dashboard';

function App(props) {
  return (
    <Admin
      dataProvider={props.dataProvider}
      dashboard={DashBoard}
      layout={MyLayout}
    >
      <Resource
        name="todos"
        icon={PostIcon}
        list={TodoList}
        edit={TodoEdit}
        create={TodoCreate}
      />
      <Resource
        name="users"
        icon={UserIcon}
        list={UserList}
        show={UserShow}
      />
    </Admin>
  );
};

export default App

import * as React from "react";
import { CircularProgress } from '@material-ui/core';

const Loading = (props) => (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <CircularProgress />
  </div>
);

export default Loading
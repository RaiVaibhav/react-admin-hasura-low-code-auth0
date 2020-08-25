import * as React from "react";
import { Card, CardContent } from '@material-ui/core';

const Error = (props) => (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Card>
      <CardContent>
        {props.errorMessage}
      </CardContent>
    </Card>
  </div>
);

export default Error
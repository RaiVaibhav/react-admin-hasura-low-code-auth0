import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

const DashBoard = () => (
    <Card>
        <CardHeader title="Hasura auth0 sample administration" />
        <CardContent>
          A DashBoard to test react-admin with hasura using react-admin-hasura-graphql data provider and auth0 for login
        </CardContent>
    </Card>
);

export default DashBoard
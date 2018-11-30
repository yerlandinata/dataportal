import { Grid } from '@material-ui/core';
import * as React from 'react';

export const GridContainer: React.SFC<any> = (props: any) => (
    <Grid container={true} style={{ padding: '0.5em' }} {...props} />
);

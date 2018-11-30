import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';

const style = () => ({
    container: {
        height: '75vh',
        'overflow-y': 'auto',
        'overflow-x': 'hidden',
    }
});

export const GridScrollable = withStyles(style)((props: any) => <Grid {...props} />);

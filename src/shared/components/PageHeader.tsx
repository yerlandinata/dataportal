import { Paper } from '@material-ui/core';
import { StyleRulesCallback, withStyles } from '@material-ui/core/styles';
import * as React from 'react';

const styles: StyleRulesCallback = (theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        margin: 0,
        padding: '1em'
    },
    text: {
        color: theme.palette.common.white
    }
});

export const PageHeader = withStyles(styles)(
    ({classes, children}: {classes: any, children: React.ReactNode}) => 
        (<Paper className={classes.root} square={true} elevation={10}>{
            React.Children.map(children, (child) => React.cloneElement(child as React.ReactElement<any>, {className: classes.text}))
        }</Paper>)
);

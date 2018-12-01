import { Grid, Paper, StyleRulesCallback, withStyles } from '@material-ui/core';
import { BubbleChart } from '@material-ui/icons';
import * as React from 'react';
import { User } from 'src/interfaces';
import { ProfileBadge } from 'src/shared/components/ProfileBadge';

interface AppHeaderProps {
    activeUser: User;
}

const styles: StyleRulesCallback = (theme) => ({
    root: {
        margin: 0,
        padding: '0.25em'
    },
});

export const AppHeader = withStyles(styles)(
    ({activeUser, classes}: AppHeaderProps & {classes: any}) => (
        <Paper className={classes.root} square={true} elevation={10}>
            <Grid container={true} justify="flex-end">
                <Grid container={true} item={true} xs={2} md={8} alignItems="center">
                    <Grid item={true}>
                        <BubbleChart color="primary" fontSize="large" />
                    </Grid>
                </Grid>
                <Grid container={true} item={true} xs={10} md={4}>
                    <ProfileBadge user={activeUser} align="right" />
                </Grid>
            </Grid>
        </Paper>
    )
);
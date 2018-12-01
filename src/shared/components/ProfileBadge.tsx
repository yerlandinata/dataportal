import { Grid, Typography } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import * as React from 'react';
import { User } from 'src/interfaces';

interface ProfileBadgeProps {
    user: User;
    align: 'left' | 'right';
}

export const ProfileBadge: React.SFC<ProfileBadgeProps> = ({user, align}) => (
    <Grid container={true} direction={align === 'left' ? 'row' : 'row-reverse'}>
        <Grid container={true} item={true} xs={2} justify="center" alignItems="center">
            <Person />
        </Grid>
        <Grid container={true} item={true} xs={10} direction="column">
            <Grid item={true}>
                <Typography variant="h6" align={align}>{user.name}</Typography>
            </Grid>
            <Grid item={true}>
                <Typography variant="caption" align={align}>{user.role}</Typography>
            </Grid>
        </Grid>
    </Grid>
);

import { Button, Grid, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
import { Dataset } from 'src/interfaces';
import { GridContainer } from 'src/shared/components/GridContainer';

interface DatasetListItemProps {
    dataset: Dataset;
    selected?: boolean;
    maxDescriptionChars?: number;
}

export const DatasetListItem: React.SFC<DatasetListItemProps> = (props) => (
    <Paper elevation={props.selected ? 3: 1}>
        <GridContainer spacing={8} direction="column">
            <Grid item={true}>
                <Typography variant="subtitle1">{props.dataset.title}</Typography>
            </Grid>
            <Grid container={true} item={true} direction="row" spacing={16} justify="space-between">
                <Grid item={true} xs={12} md={9}>
                    <Typography variant="body1" component="p">
                        {props.dataset.description.substring(0, props.maxDescriptionChars) +
                            (props.maxDescriptionChars ?
                                (props.dataset.description.length > props.maxDescriptionChars ? '...' : '') : '')}
                    </Typography>
                </Grid>
                <Grid item={true}>
                    <Button href="#dataset-details" variant="contained" size="small" disableRipple={true} disableTouchRipple={true} >
                        {props.dataset.type}
                    </Button>
                </Grid>
            </Grid>
        </GridContainer>
    </Paper>
);

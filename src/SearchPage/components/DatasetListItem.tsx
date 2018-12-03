import { Button, Divider, Grid, ListItem, Paper, StyleRulesCallback, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { DatasetBrief } from 'src/interfaces';
import { GridContainer } from 'src/shared/components/GridContainer';

interface DatasetListItemProps {
    dataset: DatasetBrief;
    selected?: boolean;
    maxDescriptionChars?: number;
    onClick: (dataset: DatasetBrief) => void;
}

const styles: StyleRulesCallback = (theme) => ({
    button: {
        '&:hover': {
            backgroundColor: theme.palette.common.white
        }
    }
});

export const DatasetListItem = withStyles(styles)(
    ({dataset, selected, maxDescriptionChars, onClick, classes}: DatasetListItemProps & {classes: any}) => (
        <ListItem classes={{button: classes.button}} button={true} disableGutters={true} onClick={onClick.bind(null,  dataset)}>
            <Grid container={true} direction="column">
                <Grid item={true}>
                    <Paper elevation={selected ? 3: 0}>
                        <GridContainer spacing={8} direction="column">
                            <Grid item={true}>
                                <Typography variant="subtitle1">{dataset.title}</Typography>
                            </Grid>
                            <Grid container={true} item={true} direction="row" spacing={16} justify="space-between">
                                <Grid item={true} xs={12} md={9}>
                                    <Typography variant="body1" component="p">
                                        {dataset.description.substring(0, maxDescriptionChars) +
                                            (maxDescriptionChars ?
                                                (dataset.description.length > maxDescriptionChars ? '...' : '') : '')}
                                    </Typography>
                                </Grid>
                                <Grid item={true}>
                                    <Button href="#dataset-details" variant="contained" size="small" disableRipple={true} disableTouchRipple={true} >
                                        {dataset.type}
                                    </Button>
                                </Grid>
                            </Grid>
                        </GridContainer>
                    </Paper>
                </Grid>
                <Grid item={true}><Divider /></Grid>
            </Grid>
        </ListItem>
    )
);

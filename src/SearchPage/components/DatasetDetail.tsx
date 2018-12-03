import { Button, Divider, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import * as React from 'react';
import { Dataset, DatasetType } from 'src/interfaces';
import { GridContainer } from 'src/shared/components/GridContainer';

interface DatasetDetailProps {
    dataset: Dataset;
    style?: any
}

export const DatasetDetail: React.SFC<DatasetDetailProps> = ({dataset, style}) => (
    <Grid container={true} style={style}>
        <GridContainer item={true} direction="column" spacing={16}>
            <Grid item={true}>
                <Typography variant="h5">{dataset.title}</Typography>
            </Grid>
            <Grid item={true}>
                <Button variant="contained" href={dataset.url} color="primary">{DatasetType[dataset.type]}</Button>
            </Grid>
            <Grid item={true}>
                <Typography component="p">{dataset.description}</Typography>
            </Grid>
            <Grid item={true}><Divider /></Grid>
            <Grid item={true}><Typography variant="h6">Columns</Typography></Grid>
            <Grid item={true}><Divider /></Grid>
            <Grid item={true}>
                <List component="nav">
                    {dataset.columns.map((c) => <ListItem key={c}><ListItemText>{c}</ListItemText></ListItem>)}
                </List>
            </Grid>
        </GridContainer>
    </Grid>
);

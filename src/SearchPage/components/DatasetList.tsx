import { Divider, Grid, Grow, LinearProgress, List, ListItem, Typography } from '@material-ui/core';
import * as React from 'react';
import { DatasetBrief, DatasetType, SearchQueryOrdering } from 'src/interfaces';
import { GridContainer } from 'src/shared/components/GridContainer';
import { DatasetListItem } from './DatasetListItem';

interface DatasetListProps {
    datasetList: DatasetBrief[];
    ordering: SearchQueryOrdering;
    maxDescriptionChars?: number;
    keyword: string;
    selectedId?: number;
    isLoading: boolean;
    onDatasetListItemSelected: (dataset: DatasetBrief) => void;
}

export const DatasetList: React.SFC<DatasetListProps> = 
    ({datasetList, maxDescriptionChars, keyword, selectedId, onDatasetListItemSelected, isLoading}) => (
    <GridContainer item={true}>
        <List>
            {(isLoading ? (
                <ListItem disableGutters={true}><Grid container={true}><LinearProgress style={{width: '100%'}} /></Grid></ListItem>
            ) : (
                <ListItem disableGutters={true}><Typography variant="caption">{datasetList.length} dataset{datasetList.length > 1 ? 's' : ''} {keyword ? (<span>found for '{keyword}'</span>) : ''}</Typography></ListItem>
            ))}
            {Object.keys(DatasetType)
                .filter((datatype) => datasetList.some((dataset) => dataset.type === datatype))
                .map(
                    (dataType: DatasetType, i) => (
                        <ListItem disableGutters={true} key={i}>
                            <Grid container={true} direction="column">
                                <Grid container={true} item={true} direction="column">
                                    <Typography variant="subtitle1">{DatasetType[dataType]}</Typography>
                                    <Divider />
                                </Grid>
                                <List disablePadding={true}> {
                                    datasetList
                                        .filter((dataset) => dataset.type === dataType)
                                        .map(
                                            (dataset, idx) => (
                                                <Grow in={!isLoading} key={idx} timeout={250}>
                                                    <DatasetListItem
                                                        dataset={dataset}
                                                        selected={selectedId === dataset.id}
                                                        maxDescriptionChars={maxDescriptionChars}
                                                        onClick={onDatasetListItemSelected}
                                                    />
                                                </Grow>
                                            )
                                        )
                                    }
                                </List>
                            </Grid>
                        </ListItem>
                    )
                )}
        </List>
    </GridContainer>
);  

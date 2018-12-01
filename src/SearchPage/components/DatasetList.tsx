import { Divider, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { Dataset, DatasetType, SearchQueryOrdering } from 'src/interfaces';
import { GridContainer } from 'src/shared/components/GridContainer';
import { DatasetListItem } from './DatasetListItem';

interface DatasetListProps {
    datasetList: Dataset[];
    ordering: SearchQueryOrdering;
    maxDescriptionChars?: number;
    keyword: string;
}

export const DatasetList: React.SFC<DatasetListProps> = ({datasetList, maxDescriptionChars, keyword}) => (
    <Grid container={true}>
        <GridContainer item={true}>
            <Typography variant="caption">{datasetList.length} datasets found for '{keyword}'</Typography>
        </GridContainer>
        {Object.keys(DatasetType).map(
            (dataType: DatasetType, i) => (
                <Grid container={true} key={-i} direction="column">
                    <GridContainer item={true} direction="column">
                        <Divider />
                        <Typography variant="subtitle1">{DatasetType[dataType]}</Typography>
                        <Divider />
                    </GridContainer>
                    <Grid container={true} item={true} direction="column"> {
                        datasetList
                            .filter((dataset) => dataset.type === dataType)
                            .map(
                                (dataset) => (
                                    <Grid container={true} key={dataset.id}>
                                        <DatasetListItem dataset={dataset} {...maxDescriptionChars}/>
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                </Grid>
            )
        )}
    </Grid>
); 

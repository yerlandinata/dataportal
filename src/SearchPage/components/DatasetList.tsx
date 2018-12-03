import { Divider, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { DatasetBrief, DatasetType, SearchQueryOrdering } from 'src/interfaces';
import { GridContainer } from 'src/shared/components/GridContainer';
import { DatasetListItem } from './DatasetListItem';

interface DatasetListProps {
    datasetList: DatasetBrief[];
    ordering: SearchQueryOrdering;
    maxDescriptionChars?: number;
    keyword: string;
}

export const DatasetList: React.SFC<DatasetListProps> = ({datasetList, maxDescriptionChars, keyword}) => (
    <Grid container={true}>
        <Typography variant="caption">{datasetList.length} datasets found for '{keyword}'</Typography>
        {Object.keys(DatasetType)
            .filter((datatype) => datasetList.some((dataset) => dataset.type === datatype))
            .map(
                (dataType: DatasetType, i) => (
                    <Grid container={true} key={i} direction="column">
                        <GridContainer item={true} direction="column">
                            <Divider />
                            <Typography variant="subtitle1">{DatasetType[dataType]}</Typography>
                            <Divider />
                        </GridContainer>
                        <Grid container={true} item={true} direction="column"> {
                            datasetList
                                .filter((dataset) => dataset.type === dataType)
                                .map(
                                    (dataset, idx) => (
                                        <Grid container={true} key={idx}>
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

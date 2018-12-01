import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Dataset, DatasetType, SearchQuery, SearchQueryOrdering } from 'src/interfaces';
import { SubmitQueryActionCreator } from 'src/SearchPage/reducer';

import { Divider, Grid, Typography, withWidth } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { reduxForm } from 'redux-form';
import { GridContainer } from 'src/shared/components/GridContainer';
import { GridScrollable } from 'src/shared/components/GridScrollable';
import { PageHeader } from 'src/shared/components/PageHeader';
import { DatasetDetail } from '../components/DatasetDetail';
import { DatasetList } from '../components/DatasetList';
import { SearchBar } from '../components/SearchBar';

interface SearchPageProps {
    selectedDataset?: Dataset;
    width: Breakpoint;
    onSearch: typeof SubmitQueryActionCreator;
}

const dummyDataset = (id: number): Dataset => ({
    id,
    url: '#',
    title: 'Good Dataset #' + (id ? id : 0),
    description: 'This dataset is very good, you have to check this out!',
    type: Object.keys(DatasetType)[id % Object.keys(DatasetType).length] as DatasetType,
    columns: ['data', 'date', 'isImportant'],
    createdDate: 12,
    lastModified: 142,
    tags: ['very', 'good', 'dataset'],
    maintainer: 'you',
});

class SearchPageComponent extends React.Component<SearchPageProps> {

    constructor(props: SearchPageProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <Grid container={true}>
                <Grid container={true}>
                    <PageHeader>
                        <Typography variant="h6" color="textSecondary">Search</Typography>
                    </PageHeader>
                </Grid>
                <Grid container={true} item={true}>
                    <Grid item={true} xs={12}>
                        <SearchBarForm />
                        <Divider />
                    </Grid>
                    <GridContainer item={true} xs={12}>
                        <Grid container={true} item={true} xs={12} sm={6} md={8}>
                            <GridScrollable container={true} item={true} style={this.props.width === 'xs' ? {height: '100vh'} : {}}>
                                <DatasetList
                                    datasetList={Array(60).fill(0).map((_, i) => dummyDataset(i))}
                                    ordering={SearchQueryOrdering.NameAscending}
                                    maxDescriptionChars={64}
                                    keyword="dummy"
                                />
                            </GridScrollable>
                        </Grid>
                        <Grid container={true} item={true} xs={12} sm={6} md={4}>
                            <GridScrollable container={true} item={true} style={this.props.width === 'xs' ? {height: '100vh'} : {}}>
                                <DatasetDetail dataset={dummyDataset(0)} />
                            </GridScrollable>
                        </Grid>
                    </GridContainer>
                </Grid>            
            </Grid>
        );
    }

    onSubmit() {
        this.props.onSearch({
            text: '' + Math.random(),
            ordering: SearchQueryOrdering.NameAscending
        });
    }

}

const SearchBarForm = reduxForm({
    form: 'search'
})(SearchBar);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSearch: (query: SearchQuery) => dispatch(SubmitQueryActionCreator(query))
});

export const SearchPage = connect(null, mapDispatchToProps)(withWidth()(SearchPageComponent));

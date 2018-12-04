import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState, Dataset, DatasetBrief, SearchQuery, SearchQueryOrdering } from 'src/interfaces';
import { FetchDatasetActionCreator, SubmitQueryActionCreator } from 'src/SearchPage/reducer';

import { CircularProgress, Divider, Fade, Grid, Typography, withWidth } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { reduxForm } from 'redux-form';
import { GridContainer } from 'src/shared/components/GridContainer';
import { GridScrollable } from 'src/shared/components/GridScrollable';
import { PageHeader } from 'src/shared/components/PageHeader';
import { DatasetDetail } from '../components/DatasetDetail';
import { DatasetList } from '../components/DatasetList';
import { SearchBar } from '../components/SearchBar';

interface SearchPageProps {
    selectedDataset: Dataset;
    datasetListing: DatasetBrief[];
    searchKeyword: string;
    width: Breakpoint;
    loadingList: boolean;
    loadingDetail: boolean;

    onSearch: typeof SubmitQueryActionCreator;
    onDatasetSelected: typeof FetchDatasetActionCreator;
}

class SearchPageComponent extends React.Component<SearchPageProps> {

    constructor(props: SearchPageProps) {
        super(props);
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
                                    datasetList={this.props.datasetListing || []}
                                    ordering={SearchQueryOrdering.NameAscending}
                                    maxDescriptionChars={64}
                                    keyword={this.props.searchKeyword}
                                    onDatasetListItemSelected={this.props.onDatasetSelected}
                                    isLoading={this.props.loadingList}
                                    selectedId={this.props.selectedDataset ? this.props.selectedDataset.id : undefined}
                                />
                            </GridScrollable>
                        </Grid>
                        <Grid container={true} item={true} xs={12} sm={6} md={4}>
                            <GridScrollable id="dataset-details" container={true} item={true} justify="center" style={this.props.width === 'xs' ? {height: '100vh'} : {}}>
                                {this.props.loadingDetail ? (<Fade timeout={250} in={true}><CircularProgress /></Fade>) : ('')}
                                {this.props.selectedDataset ? (
                                    <Fade timeout={250} in={!this.props.loadingDetail}><DatasetDetail dataset={this.props.selectedDataset } /></Fade>
                                ) : <div />}
                            </GridScrollable>
                        </Grid>
                    </GridContainer>
                </Grid>            
            </Grid>
        );
    }

}

const SearchBarForm = reduxForm({
    form: 'search'
})(SearchBar);

const mapStateToProps = ({searchPage}: AppState) => ({
    searchKeyword: searchPage.currentSearchQuery ? searchPage.currentSearchQuery.text : '',
    datasetListing: searchPage.currentDatasetList,
    selectedDataset: searchPage.currentDatasetSelected,
    loadingDetail: searchPage.isLoadingDatasetDetail,
    loadingList: searchPage.isLoadingDatasetList
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSearch: (query: SearchQuery) => dispatch(SubmitQueryActionCreator(query)),
    onDatasetSelected: (dataset: DatasetBrief) => dispatch(FetchDatasetActionCreator(dataset))
});

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(withWidth()(SearchPageComponent));

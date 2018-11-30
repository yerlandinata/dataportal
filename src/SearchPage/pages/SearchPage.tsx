import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Dataset, SearchQuery, SearchQueryOrdering } from 'src/interfaces';
import { SubmitQueryActionCreator } from 'src/SearchPage/reducer';

import { Divider, Grid } from '@material-ui/core';
import { reduxForm } from 'redux-form';
import { GridContainer } from 'src/shared/components/GridContainer';
import { GridScrollable } from 'src/shared/components/GridScrollable';
import { DatasetListItem } from '../components/DatasetListItem';
import { SearchBar } from '../components/SearchBar';

interface SearchPageProps {
    selectedDataset?: Dataset;
    onSearch: typeof SubmitQueryActionCreator;
}

class SearchPageComponent extends React.Component<SearchPageProps> {

    constructor(props: SearchPageProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <GridContainer spacing={24}>
                <Grid item={true} xs={12}>
                    <SearchBarForm />
                    <Divider />
                </Grid>
                <GridContainer item={true} xs={12}>
                    <GridContainer item={true} xs={12} md={8}>
                        <GridScrollable container={true} item={true}>
                            {Array(60).fill(undefined).map(
                                (_, i) => (<DatasetListItem key={i} dataset={{
                                    id: i,
                                    title: 'Good Dataset #' + i,
                                    description: 'This dataset is very good, you have to check this out!',
                                    type: 'BigQuery',
                                    columns: ['data', 'date'],
                                    createdDate: 12,
                                    lastModified: 142,
                                    tags: ['very', 'good', 'dataset'],
                                    maintainer: 'you',
                                }} maxDescriptionChars={100}/>)
                            )}
                        </GridScrollable>
                    </GridContainer>
                </GridContainer>
            </GridContainer>
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

export const SearchPage = connect(null, mapDispatchToProps)(SearchPageComponent);

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Dataset, SearchQuery, SearchQueryOrdering } from 'src/interfaces';
import { SubmitQueryActionCreator } from 'src/SearchPage/reducer';

import { Grid } from '@material-ui/core';
import { reduxForm } from 'redux-form';
import { GridContainer } from 'src/shared/components/GridContainer';
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
                </Grid>
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

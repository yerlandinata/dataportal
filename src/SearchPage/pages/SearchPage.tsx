import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Dataset, SearchQuery } from 'src/interfaces';
import { SubmitQueryActionCreator } from 'src/SearchPage/reducer';

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
            <div className="container">
                <div className="row">
                    <div className="col s12 m8">
                        <div className="row">
                            <div className="input-field col s12 blue-text text-lighten-2">
                                <input id="query" type="text" className="validate"/>
                                <label htmlFor="query">Search</label>
                            </div>
                        </div>
                        <div className="row">
                            <a className="waves-effect waves-light blue lighten-2 btn" onClick={this.onSubmit}>Submit</a>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        Details
                    </div>
                </div>
            </div>
        );
    }

    onSubmit() {
        this.props.onSearch({
            text: '' + Math.random(),
            ordering: 'NameAscending'
        });
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSearch: (query: SearchQuery) => dispatch(SubmitQueryActionCreator(query))
});

export const SearchPage = connect(null, mapDispatchToProps)(SearchPageComponent);

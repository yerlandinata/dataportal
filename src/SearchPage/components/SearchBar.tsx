import { FormControl, Grid, MenuItem } from '@material-ui/core';
import { Search, SortByAlpha } from '@material-ui/icons';
import * as React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { SearchQueryOrdering } from 'src/interfaces';
import { GridContainer } from 'src/shared/components/GridContainer';
import { InputSelect } from 'src/shared/components/InputSelect';
import { InputText } from 'src/shared/components/InputText';

export const SearchBar: React.SFC<InjectedFormProps> = (props: InjectedFormProps) => (
    <form onSubmit={props.handleSubmit}>
        <GridContainer item={true} xs={12}>
            {/* Search InputText */}
            <Grid container={true} item={true} spacing={8} alignItems="flex-end" xs={12} md={8}>
                <Grid item={true}>
                    <Search />
                </Grid>
                <Grid item={true} xs={10} md={11}>
                    <FormControl fullWidth={true}>
                        <Field name="query" type="text" component={InputText} label="Search..." />  
                    </FormControl>
                </Grid>
            </Grid>
            {/* Search Order by */}
            <Grid container={true} item={true} spacing={8} alignItems="flex-end" xs={12} md={4}>
                <Grid item={true}>
                    <SortByAlpha />
                </Grid>
                <Grid item={true} xs={10}>
                    <FormControl fullWidth={true}>
                        <Field name="ordering" type="select" component={InputSelect} label="Order by">
                            {(Object.keys(SearchQueryOrdering)).map(
                                (ordering) => (<MenuItem key={ordering} value={ordering}>{SearchQueryOrdering[ordering]}</MenuItem>))
                            }
                        </Field>  
                    </FormControl>
                </Grid>
            </Grid>
        </GridContainer>
    </form>
);



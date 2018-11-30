import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { combineEpics } from 'redux-observable';
import { searchPageEpics } from 'src/SearchPage/epics';
import { searchPageReducer as searchPage } from 'src/SearchPage/reducer';

export const rootEpic = combineEpics(
    searchPageEpics
);

export const rootReducer = combineReducers({
    searchPage,
    form
});

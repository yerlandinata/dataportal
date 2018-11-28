import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { searchPageEpics } from 'src/SearchPage/epics';
import { searchPageReducer } from 'src/SearchPage/reducer';

export const rootEpic = combineEpics(
    searchPageEpics
);

export const rootReducer = combineReducers({
    searchPageReducer
});

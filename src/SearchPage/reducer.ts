import { DatasetBrief, SearchQuery } from "src/interfaces";
import { Action, ActionCreator } from "src/redux/action";
import { SearchPageState } from "src/SearchPage/interfaces";

export const SubmitQueryActionCreator = ActionCreator<'SubmitQuery', SearchQuery, null>('SubmitQuery');
export type SubmitQueryAction = Action<'SubmitQuery', SearchQuery, null>;

export const SubmitQueryFailActionCreator = ActionCreator<'SubmitQueryFail', null, null>('SubmitQueryFail');
export type SubmitQueryFailAction = Action<'SubmitQueryFail', null, Error>;

export const SubmitQueryDoneActionCreator = ActionCreator<'SubmitQueryDone', DatasetBrief[], null>('SubmitQueryDone');
export type SubmitQueryDoneAction = Action<'SubmitQueryDone', DatasetBrief[], null>;

const initialState: SearchPageState = {

};

export const searchPageReducer = (state: SearchPageState = initialState, 
    action: SubmitQueryAction | SubmitQueryDoneAction | SubmitQueryFailAction): SearchPageState => {
    switch (action.type) {
        case 'SubmitQuery':
            return {
                ...state,
                currentSearchQuery: action.payload
            };
        case 'SubmitQueryDone':
            return {
                ...state,
                currentDatasetList: action.payload
            };
        case 'SubmitQueryFail':
            return {
                ...state,
                currentDatasetList: [],
            };
        default: return state;
    }
};

import { Dataset, DatasetBrief, SearchQuery } from "src/interfaces";
import { Action, ActionCreator } from "src/redux/action";
import { SearchPageState } from "src/SearchPage/interfaces";

export const SubmitQueryActionCreator = ActionCreator<'SubmitQuery', SearchQuery, null>('SubmitQuery');
export type SubmitQueryAction = Action<'SubmitQuery', SearchQuery, null>;

export const SubmitQueryFailActionCreator = ActionCreator<'SubmitQueryFail', null, null>('SubmitQueryFail');
export type SubmitQueryFailAction = Action<'SubmitQueryFail', null, Error>;

export const SubmitQueryDoneActionCreator = ActionCreator<'SubmitQueryDone', DatasetBrief[], null>('SubmitQueryDone');
export type SubmitQueryDoneAction = Action<'SubmitQueryDone', DatasetBrief[], null>;

export const FetchDatasetActionCreator = ActionCreator<'FetchDataset', DatasetBrief, null>('FetchDataset');
export type FetchDatasetAction = Action<'FetchDataset', DatasetBrief, null>;

export const FetchDatasetFailActionCreator = ActionCreator<'FetchDatasetFail', null, null>('FetchDatasetFail');
export type FetchDatasetFailAction = Action<'FetchDatasetFail', null, Error>;

export const FetchDatasetDoneActionCreator = ActionCreator<'FetchDatasetDone', Dataset, null>('FetchDatasetDone');
export type FetchDatasetDoneAction = Action<'FetchDatasetDone', Dataset, null>;

const initialState: SearchPageState = {
    currentSearchQuery: {
        text: '',
    },
    isLoadingDatasetDetail: false,
    isLoadingDatasetList: false,
};

export const searchPageReducer = (state: SearchPageState = initialState, 
    action: SubmitQueryAction | SubmitQueryDoneAction | SubmitQueryFailAction | 
            FetchDatasetAction | FetchDatasetDoneAction | FetchDatasetFailAction): SearchPageState => {
    switch (action.type) {
        case 'SubmitQuery':
            return {
                ...state,
                currentSearchQuery: {
                    text: action.payload!.text ? action.payload!.text : state.currentSearchQuery.text,
                    ordering: action.payload!.ordering ? action.payload!.ordering : state.currentSearchQuery.ordering
                }
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
        case 'FetchDataset':
            return {
                ...state,
                isLoadingDatasetDetail: true
            };
        case 'FetchDatasetDone':
            return {
                ...state,
                currentDatasetSelected: action.payload,
                isLoadingDatasetDetail: false
            };
        case 'FetchDatasetFail':
            return {
                ...state,
                currentDatasetSelected: undefined,
                isLoadingDatasetDetail: false
            };
        default: return state;
    }
};

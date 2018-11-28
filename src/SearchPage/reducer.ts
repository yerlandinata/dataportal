import { Dataset, SearchQuery } from "src/interfaces";
import { Action, ActionCreator } from "src/redux/action";
import { SearchPageState } from "src/SearchPage/interfaces";

export const SubmitQueryActionCreator = ActionCreator<'SubmitQuery', SearchQuery, null>('SubmitQuery');
export type SubmitQueryAction = Action<'SubmitQuery', SearchQuery, null>;

export const SubmitQueryDoneActionCreator = ActionCreator<'SubmitQueryDone', Dataset[], null>('SubmitQueryDone');
export type SubmitQueryDoneAction = Action<'SubmitQueryDone', Dataset[], null>;

const initialState: SearchPageState = {

}

export const searchPageReducer = (state: SearchPageState = initialState, 
    action: SubmitQueryAction | SubmitQueryDoneAction): SearchPageState => {
    console.log('ACTION: ' + action);
    console.log('PREVIOUS STATE: ' + JSON.stringify(state));
    switch (action.type) {
        case 'SubmitQuery':
            return {
                ...state,
                currentSearchQuery: action.payload
            }
        case 'SubmitQueryDone':
            return {
                ...state,
                currentDatasetList: action.payload
            }
        default: return state;
    }
}

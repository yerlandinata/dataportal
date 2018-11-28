import { ActionsObservable, combineEpics, ofType } from "redux-observable";
import { map } from 'rxjs/operators';
import { SubmitQueryAction, SubmitQueryDoneActionCreator } from './reducer';

export const searchPageEpics = combineEpics(
    (action$: ActionsObservable<SubmitQueryAction>) => action$.pipe(
        ofType('SubmitQuery'),
        map((action) => SubmitQueryDoneActionCreator([{
            title: action.payload ? action.payload.text : 'aaa',
            type: 'BigQuery',
            columns: ['a', 'b'],
            createdDate: 123,
            lastModified: 124,
            tags: [],
            maintainer: 'me',
        }]))
    )
);

import { FormAction } from 'redux-form';
import { ActionsObservable, combineEpics, ofType } from "redux-observable";
import { TypedAxiosInstance } from 'restyped-axios';
import { from, of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { DataPortalApi } from 'src/api';
import { DatasetBrief } from 'src/interfaces';
import { SubmitQueryActionCreator, SubmitQueryDoneActionCreator, SubmitQueryFailActionCreator } from './reducer';

export const searchPageEpics = combineEpics(
    (action$: ActionsObservable<FormAction>, _: any, { api }: {api: TypedAxiosInstance<DataPortalApi>}) => action$.pipe(
        ofType('@@redux-form/CHANGE'),
        filter((action) => action.meta ? action.meta.field === 'query' : false),
        mergeMap(
            (action) => from(api.get('/search/' + action.payload)).pipe(
                map(({data}) => SubmitQueryDoneActionCreator(data as DatasetBrief[])),
                catchError(e => of(SubmitQueryFailActionCreator(null, e)))
            )
        )
    ),
    (action$: ActionsObservable<FormAction>) => action$.pipe(
        ofType('@@redux-form/CHANGE'),
        map((action) => SubmitQueryActionCreator({
            text: action.meta!.field === 'query' ? action.payload : '',
            ordering: action.meta!.field === 'ordering' ? action.payload : ''
        }))
    )
);

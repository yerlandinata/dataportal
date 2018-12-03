import { FormAction } from 'redux-form';
import { ActionsObservable, combineEpics, ofType, StateObservable } from "redux-observable";
import { TypedAxiosInstance } from 'restyped-axios';
import { from, of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { DataPortalApi } from 'src/api';
import { AppState, Dataset, DatasetBrief } from 'src/interfaces';
import { FetchDatasetAction, FetchDatasetDoneActionCreator, FetchDatasetFailActionCreator, SubmitQueryAction, SubmitQueryActionCreator, SubmitQueryDoneActionCreator, SubmitQueryFailActionCreator } from './reducer';
import { sortDataset } from './utils';

export const searchPageEpics = combineEpics(
    (action$: ActionsObservable<FormAction>, state$: StateObservable<AppState>, { api }: {api: TypedAxiosInstance<DataPortalApi>}) => action$.pipe(
        ofType('@@redux-form/CHANGE'),
        filter((action) => action.meta ? action.meta.field === 'query' : false),
        mergeMap(
            (action) => from(api.get('/search/' + (action.payload! as string).replace(/\s/g, '+')  )).pipe(
                map(({data}) => SubmitQueryDoneActionCreator(
                    sortDataset(data as DatasetBrief[], state$.value.searchPage.currentSearchQuery.ordering)
                )),
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
    ),
    (action$: ActionsObservable<SubmitQueryAction>, state$: StateObservable<AppState>) => action$.pipe(
        ofType('SubmitQuery'),
        filter((action) => action.payload ? !!(action.payload.ordering) : false),
        filter((_) => !!(state$.value.searchPage.currentDatasetList)),
        map((action) => SubmitQueryDoneActionCreator(sortDataset(state$.value.searchPage.currentDatasetList!, action.payload!.ordering)))
    ),
    (action$: ActionsObservable<FetchDatasetAction>, _: any, { api }: {api: TypedAxiosInstance<DataPortalApi>}) => action$.pipe(
        ofType('FetchDataset'),
        mergeMap(
            (action) => from(api.get('/dataset/' + action.payload!.id)).pipe(
                map(({data}) => FetchDatasetDoneActionCreator(data as Dataset)),
                catchError(e => of(FetchDatasetFailActionCreator(null, e)))
            )
        )
    )
);

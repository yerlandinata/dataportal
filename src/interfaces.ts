import { SearchPageState } from './SearchPage/interfaces';

export interface DatasetBrief {
    id: number;
    title: string;
    description: string;
    type: DatasetType;
}

export interface Dataset extends DatasetBrief {
    url: string;
    columns: string[];
    createdDate: number;
    lastModified: number;
    tags: string[];
    maintainer: string;
}

export enum DatasetType {
    BigQuery = 'BigQuery Table',
    CSV = 'Comma Separated Values',
    Text = 'Unstructured Text',
}

export interface User {
    name: string;
    role: 'Member' | 'Admin';
    picUrl?: string;
}

export interface SearchQuery {
    text: string;
    ordering: SearchQueryOrdering;
}

export enum SearchQueryOrdering {
    NameAscending = 'Name Ascending',
    NameDescending = 'Name Descending'
}

export interface AppState {
    searchPage: SearchPageState;
    form: any
}

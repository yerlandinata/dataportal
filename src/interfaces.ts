export interface Dataset {
    title: string;
    type: DatasetType;
    columns: string[];
    createdDate: number;
    lastModified: number;
    tags: string[];
    maintainer: string;
}

export type DatasetType = 'BigQuery' | 'CSV' | 'Text';

export interface User {
    name: string;
    title: string;
    role: 'member' | 'admin';
}

export interface SearchQuery {
    text: string;
    ordering: 'NameAscending' | 'NameDescending';
}

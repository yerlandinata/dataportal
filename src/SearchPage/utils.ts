import { DatasetBrief, SearchQueryOrdering } from 'src/interfaces';

export const sortDataset = (arr: DatasetBrief[], ordering?: string) =>
    ordering ? (
        arr.slice().sort(
            (a, b) => (SearchQueryOrdering[ordering] === SearchQueryOrdering.NameAscending ? (a.title.localeCompare(b.title)) : (b.title.localeCompare(a.title)))
        )
    ) : (arr);

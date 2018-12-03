import { Dataset, DatasetBrief, SearchQuery } from "src/interfaces";

export interface SearchPageState {
    currentSearchQuery?: SearchQuery;
    currentDatasetList?: DatasetBrief[];
    currentDatasetSelected?: Dataset;
}
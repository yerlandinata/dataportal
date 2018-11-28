import { Dataset, SearchQuery } from "src/interfaces";

export interface SearchPageState {
    currentSearchQuery?: SearchQuery;
    currentDatasetList?: Dataset[];
}
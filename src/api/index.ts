import axios from 'restyped-axios';
import { Dataset, DatasetBrief } from 'src/interfaces';

const devApi = 'http://localhost:8000/api/';
const prodApi = 'https://yerlandinata-dataportal-api.herokuapp.com/api/';

export interface DataPortalApi {
    '/search/:query': {
        GET: {
            params: {
                query: string
            }
            response: DatasetBrief[]
        }
    },
    '/dataset/:id': {
        GET: {
            params: {
                id: number
            }
            response: Dataset
        }       
    }
}

export const api = axios.create<DataPortalApi>({
    baseURL: ((!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? devApi : prodApi)
});

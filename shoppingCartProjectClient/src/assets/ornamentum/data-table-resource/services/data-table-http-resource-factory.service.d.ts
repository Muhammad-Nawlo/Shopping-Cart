import { HttpClient } from '@angular/common/http';
import { DataTableHttpDataFetchService } from './data-table-http-data-fetch.service';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
/**
 * Data table HTTP data fetch service factory.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTableHttpResourceFactoryService {
    private http;
    requestParamMapperService: RequestParamMapperService;
    constructor(http: HttpClient, requestParamMapperService: RequestParamMapperService);
    /**
     * Get new data table HTTP data fetch service instance.
     */
    getResourceProvider<T>(): DataTableHttpDataFetchService<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableHttpResourceFactoryService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<DataTableHttpResourceFactoryService>;
}

//# sourceMappingURL=data-table-http-resource-factory.service.d.ts.map
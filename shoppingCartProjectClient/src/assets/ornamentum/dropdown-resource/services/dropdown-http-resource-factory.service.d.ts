import { HttpClient } from '@angular/common/http';
import { DropdownHttpDataFetchService } from './dropdown-http-data-fetch.service';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
/**
 * Dropdown HTTP data fetch service factory.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DropdownHttpResourceFactoryService {
    private http;
    requestParamMapperService: RequestParamMapperService;
    constructor(http: HttpClient, requestParamMapperService: RequestParamMapperService);
    /**
     * Get new dropdown HTTP data fetch service instance.
     */
    getResourceProvider<T>(): DropdownHttpDataFetchService<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropdownHttpResourceFactoryService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<DropdownHttpResourceFactoryService>;
}

//# sourceMappingURL=dropdown-http-resource-factory.service.d.ts.map
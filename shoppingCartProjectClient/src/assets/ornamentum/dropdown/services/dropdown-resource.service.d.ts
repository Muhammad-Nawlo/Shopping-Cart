import { Observable } from 'rxjs';
import { DropdownQueryResult } from '../models/dropdown-query-result.model';
import { DropdownRequestParams } from '../models/dropdown-request-params.model';
/**
 * Dropdown resource service. Dropdown client side data query is handled via this service.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DropdownResourceService<T> {
    private optionDataStream;
    private dataSourceSubscription;
    /**
     * Set source data source.
     * @param dataSource Data source observable.
     */
    setDataSource(dataSource: Observable<T[]>): void;
    /**
     * Query data.
     * @param params Dropdown request parameters.
     */
    query(params: DropdownRequestParams): Observable<DropdownQueryResult<T>>;
    /**
     * Dispose data source.
     */
    dispose(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropdownResourceService<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<DropdownResourceService<any>>;
}

//# sourceMappingURL=dropdown-resource.service.d.ts.map
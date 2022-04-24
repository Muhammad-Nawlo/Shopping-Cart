import { DataTableRequestParams } from '../models/data-table-request-params.model';
import { DataTableStorageMode } from '../models/data-table-storage-mode.model';
import { GlobalRefService } from '../../utility/utility.module';
import { DataTableConfigService } from './data-table-config.service';
/**
 * Data table persistence service; Manage data table state when persist state options is enabled.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTablePersistenceService {
    private globalRefService;
    private config;
    private storage;
    constructor(globalRefService: GlobalRefService, config: DataTableConfigService);
    /**
     * Set table state storage mode.
     * @param value Storage mode.
     */
    storageMode: DataTableStorageMode;
    /**
     * Set table state by identifier.
     * @param id Table identifier.
     * @param version Data version.
     * @param value Data table request parameters object.
     */
    setState(id: string, value: DataTableRequestParams, version?: string): void;
    /**
     * Get table state by identifier.
     * @param id Table identifier.
     * @param version Data version.
     * @return Data table request params object.
     */
    getState(id: string, version?: string): DataTableRequestParams;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTablePersistenceService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<DataTablePersistenceService>;
}

//# sourceMappingURL=data-table-persistence.service.d.ts.map
import { TemplateRef } from '@angular/core';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
/**
 * No data body component. Used to display no data message when data not available.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTableNoDataBodyComponent {
    config: DataTableConfigService;
    eventStateService: DataTableEventStateService;
    noRecordsTemplate: TemplateRef<any>;
    constructor(config: DataTableConfigService, eventStateService: DataTableEventStateService);
    /**
     * Reset all applied filters.
     */
    resetFilters(): void;
    /**
     * Get default no data template display status.
     * @return True if default no data template should be displayed.
     */
    readonly showDefaultNoDataTemplate: boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableNoDataBodyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DataTableNoDataBodyComponent, "ng-data-table-no-data-body", never, { "noRecordsTemplate": "noRecordsTemplate"; }, {}, never, never>;
}

//# sourceMappingURL=data-table-no-data-body.component.d.ts.map
import { TemplateRef } from '@angular/core';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Data loading spinner component. Displayed within table body while fetching data.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTableLoadingSpinnerComponent {
    config: DataTableConfigService;
    dataStateService: DataTableDataStateService;
    loadingSpinnerTemplate: TemplateRef<any>;
    isLoading: boolean;
    showOverlay: boolean;
    constructor(config: DataTableConfigService, dataStateService: DataTableDataStateService);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableLoadingSpinnerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DataTableLoadingSpinnerComponent, "ng-data-table-loading-spinner", never, { "loadingSpinnerTemplate": "loadingSpinnerTemplate"; "isLoading": "isLoading"; "showOverlay": "showOverlay"; }, {}, never, never>;
}

//# sourceMappingURL=data-table-loading-spinner.component.d.ts.map
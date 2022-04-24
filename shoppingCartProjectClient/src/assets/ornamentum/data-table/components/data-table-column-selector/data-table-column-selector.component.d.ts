import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableConfigService } from '../../services/data-table-config.service';
/**
 * Data table column selector component. Toggle display state of columns via this popup component.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTableColumnSelectorComponent {
    dataStateService: DataTableDataStateService;
    config: DataTableConfigService;
    constructor(dataStateService: DataTableDataStateService, config: DataTableConfigService);
    columns: DataTableColumnComponent[];
    width: number | string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableColumnSelectorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DataTableColumnSelectorComponent, "ng-data-table-column-selector", never, { "columns": "columns"; "width": "width"; }, {}, never, never>;
}

//# sourceMappingURL=data-table-column-selector.component.d.ts.map
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
/**
 * Data table header component. Render data table column title and filter header rows.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTableHeadComponent {
    columns: DataTableColumnComponent[];
    /**
     * Get filter column availability status.
     * @return True if there is at least one filter column.
     */
    readonly hasFilterColumns: boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableHeadComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DataTableHeadComponent, "[ngDataTableHead]", ["ngDataTableHead"], { "columns": "columns"; }, {}, never, never>;
}

//# sourceMappingURL=data-table-head.component.d.ts.map
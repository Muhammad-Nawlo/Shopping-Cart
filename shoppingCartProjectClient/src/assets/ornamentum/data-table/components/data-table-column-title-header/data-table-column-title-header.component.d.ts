import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DragAndDropService } from '../../../utility/utility.module';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
/**
 * Column title header component. Render data table column headers.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTableColumnTitleHeaderComponent {
    private dragAndDropService;
    private eventStateService;
    dataStateService: DataTableDataStateService;
    config: DataTableConfigService;
    private resizeInProgress;
    columns: DataTableColumnComponent[];
    constructor(dragAndDropService: DragAndDropService, eventStateService: DataTableEventStateService, dataStateService: DataTableDataStateService, config: DataTableConfigService);
    /**
     * Header click event handler.
     * @param column Data table column component reference.
     * @param event Mouse event arguments object.
     */
    onHeaderClick(column: DataTableColumnComponent, event: MouseEvent): void;
    /**
     * Sort data event handler.
     * @param column Data table column component reference.
     */
    private sortData;
    /**
     * Set column width.
     * @param width Width value in pixels.
     * @param column Data table column component reference.
     */
    setColumnWidth(width: number, column: DataTableColumnComponent): void;
    /**
     * Column resize event handler.
     * @param event Resize mouse event.
     * @param column Data table column component.
     * @param columnElement Table header cell element DOM reference.
     */
    onColumnResize(event: MouseEvent, column: DataTableColumnComponent, columnElement: HTMLTableHeaderCellElement): void;
    /**
     * Set all row selected state.
     * @param value All row selected status.
     */
    /**
    * Get all row selected state.
    */
    allRowSelected: boolean;
    /**
     * All row select change event handler.
     * @param selectedState Row selected status.
     */
    private allRowSelectedChanged;
    /**
     * Get all row select checkbox display status.
     * @return True if all row select checkbox should be displayed.
     */
    readonly showAllRowSelectCheckbox: boolean;
    showSortPriorityLabel(column: DataTableColumnComponent): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableColumnTitleHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DataTableColumnTitleHeaderComponent, "[ngDataTableColumnTitleHeader]", ["ngDataTableColumnTitleHeader"], { "columns": "columns"; }, {}, never, never>;
}

//# sourceMappingURL=data-table-column-title-header.component.d.ts.map
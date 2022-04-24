import { ModuleWithProviders } from '@angular/core';
import { DataTableConfig } from './models/data-table-config.model';
/**
 * Module representing data table component.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './components/data-table-header/data-table-header.component';
import * as ɵngcc2 from './components/data-table-column/data-table-column.component';
import * as ɵngcc3 from './components/data-table-col-group/data-table-col-group.component';
import * as ɵngcc4 from './components/data-table-body/data-table-body.component';
import * as ɵngcc5 from './components/data-table-pagination/data-table-pagination.component';
import * as ɵngcc6 from './components/data-table/data-table.component';
import * as ɵngcc7 from './components/data-table-column-selector/data-table-column-selector.component';
import * as ɵngcc8 from './components/data-table-no-data-body/data-table-no-data-body.component';
import * as ɵngcc9 from './components/data-table-column-filter-header/data-table-column-filter-header.component';
import * as ɵngcc10 from './components/data-table-column-filter-template/data-table-column-filter-template.component';
import * as ɵngcc11 from './components/data-table-column-title-header/data-table-column-title-header.component';
import * as ɵngcc12 from './components/data-table-head/data-table-head.component';
import * as ɵngcc13 from './components/data-table-loading-spinner/data-table-loading-spinner.component';
import * as ɵngcc14 from './directives/scroll-position.directive';
import * as ɵngcc15 from './directives/scroll-element.directive';
import * as ɵngcc16 from './directives/element-width.directive';
import * as ɵngcc17 from '@angular/common';
import * as ɵngcc18 from '@angular/forms';
import * as ɵngcc19 from '../utility/utility.module';
import * as ɵngcc20 from '../dropdown/dropdown.module';
export declare class DataTableModule {
    /**
     * Set module root configuration overrides.
     * @param dataTableConfig Data table configuration object.
     * @return Module with custom providers.
     */
    static forRoot(dataTableConfig?: DataTableConfig): ModuleWithProviders<DataTableModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<DataTableModule, [typeof ɵngcc1.DataTableHeaderComponent, typeof ɵngcc2.DataTableColumnComponent, typeof ɵngcc3.DataTableColGroupComponent, typeof ɵngcc4.DataTableBodyComponent, typeof ɵngcc5.DataTablePaginationComponent, typeof ɵngcc6.DataTableComponent, typeof ɵngcc7.DataTableColumnSelectorComponent, typeof ɵngcc8.DataTableNoDataBodyComponent, typeof ɵngcc9.DataTableColumnFilterHeaderComponent, typeof ɵngcc10.DataTableColumnFilterTemplateComponent, typeof ɵngcc11.DataTableColumnTitleHeaderComponent, typeof ɵngcc12.DataTableHeadComponent, typeof ɵngcc13.DataTableLoadingSpinnerComponent, typeof ɵngcc14.ScrollPositionDirective, typeof ɵngcc15.ScrollElementDirective, typeof ɵngcc16.ElementWidthDirective], [typeof ɵngcc17.CommonModule, typeof ɵngcc18.FormsModule, typeof ɵngcc19.UtilityModule, typeof ɵngcc20.DropdownModule], [typeof ɵngcc2.DataTableColumnComponent, typeof ɵngcc6.DataTableComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<DataTableModule>;
}
export { DataTableCellBindEventArgs } from './models/data-table-cell-bind-event-args.model';
export { DataTableQueryResult } from './models/data-table-query-result.model';
export { DataTableQueryField } from './models/data-table-query-field.model';
export { DataTableFilterOption } from './models/data-table-filter-option.model';
export { DataTableCellClickEventArgs } from './models/data-table-cell-click-event-args.model';
export { DataTableHeaderClickEventArgs } from './models/data-table-header-click-event-args.model';
export { DataTableDoubleClickEventArgs } from './models/data-table-double-click-event-args.model';
export { DataTableRowClickEventArgs } from './models/data-table-row-click-event-args.model';
export { DataTableScrollPoint } from './models/data-table-scroll-point.model';
export { DataTableRow } from './models/data-table-row.model';
export { DataTableRequestParams } from './models/data-table-request-params.model';
export { DataTableTranslations } from './models/data-table-translations.model';
export { DataTableDynamicRowSpanExtractorCallback } from './models/data-table-group-field-extractor-callback.model';
export { DataTableFilterValueExtractCallback } from './models/data-table-filter-value-extract-callback.model';
export { DataTableFilterFieldMapperCallback } from './models/data-table-filter-field-mapper-callback.model';
export { DataTableFilterExpressionCallback } from './models/data-table-filter-expression-callback.model';
export { DataTableCellColorRenderCallback } from './models/data-table-cell-color-render-callback.model';
export { DataTableSelectMode } from './models/data-table-select-mode.model';
export { DataTableDataBindCallback } from './models/data-table-data-bind-callback.model';
export { DataTableSortOrder } from './models/data-table-sort-order.model';
export { DataTableStorageMode } from './models/data-table-storage-mode.model';
export { DataFetchMode } from './models/data-fetch-mode.enum';
export { DataTableComponent } from './components/data-table/data-table.component';
export { DataTableColumnComponent } from './components/data-table-column/data-table-column.component';

//# sourceMappingURL=data-table.module.d.ts.map
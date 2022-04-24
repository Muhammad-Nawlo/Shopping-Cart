import { EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataTableHeaderClickEventArgs } from '../models/data-table-header-click-event-args.model';
import { DataTableRow } from '../models/data-table-row.model';
import { DataTableRowClickEventArgs } from '../models/data-table-row-click-event-args.model';
import { DataTableDoubleClickEventArgs } from '../models/data-table-double-click-event-args.model';
import { DataTableCellBindEventArgs } from '../models/data-table-cell-bind-event-args.model';
import { DataTableCellClickEventArgs } from '../models/data-table-cell-click-event-args.model';
import { DataFetchMode } from '../models/data-fetch-mode.enum';
import { DataTableComponent } from '../components/data-table/data-table.component';
import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';
/**
 * Data table event state service; Manage all internal data tale event streams.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTableEventStateService {
    allRowSelectChangeStream: EventEmitter<boolean>;
    dataFetchStream: EventEmitter<DataFetchMode>;
    headerClickStream: EventEmitter<DataTableHeaderClickEventArgs>;
    rowBindStream: EventEmitter<DataTableRow<any>>;
    rowClickStream: EventEmitter<DataTableRowClickEventArgs<any>>;
    rowDoubleClickStream: EventEmitter<DataTableDoubleClickEventArgs<any>>;
    rowSelectChangeStream: EventEmitter<any>;
    cellBindStream: EventEmitter<DataTableCellBindEventArgs<any>>;
    cellClickStream: EventEmitter<DataTableCellClickEventArgs<any>>;
    initStream: EventEmitter<DataTableComponent>;
    dataBoundStream: EventEmitter<void>;
    columnBind: EventEmitter<DataTableColumnComponent>;
    fetchFilterOptionsStream: ReplaySubject<{}>;
    staticDataSourceStream: ReplaySubject<any[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableEventStateService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<DataTableEventStateService>;
}

//# sourceMappingURL=data-table-event.service.d.ts.map
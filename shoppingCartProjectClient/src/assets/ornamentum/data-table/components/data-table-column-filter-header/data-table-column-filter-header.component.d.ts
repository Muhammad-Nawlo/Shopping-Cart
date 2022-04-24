import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { DataTableFilterEventArgs } from '../../models/data-table-filter-event-args.model';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
/**
 * Data table column filter header component. Apply columns associated data filtering.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataTableColumnFilterHeaderComponent implements OnInit, OnDestroy {
    config: DataTableConfigService;
    private eventStateService;
    private columnFilterStream;
    private customFilterSubscription;
    private columnFilterSubscription;
    customFilterStream: EventEmitter<DataTableFilterEventArgs>;
    columns: DataTableColumnComponent[];
    constructor(config: DataTableConfigService, eventStateService: DataTableEventStateService);
    /**
     * Component initialize lifecycle event handler.
     */
    ngOnInit(): void;
    /**
     * Component destroy lifecycle event handler.
     */
    ngOnDestroy(): void;
    /**
     * Initialize custom filter event.
     */
    private initCustomFilterEvent;
    /**
     * Initialize debounce default filtering logic.
     */
    private initDebounceDefaultFilterEvent;
    /**
     * Filter event handler.
     */
    onFilter(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableColumnFilterHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DataTableColumnFilterHeaderComponent, "[ngDataTableColumnFilterHeader]", ["ngDataTableColumnFilterHeader"], { "columns": "columns"; }, {}, never, never>;
}

//# sourceMappingURL=data-table-column-filter-header.component.d.ts.map
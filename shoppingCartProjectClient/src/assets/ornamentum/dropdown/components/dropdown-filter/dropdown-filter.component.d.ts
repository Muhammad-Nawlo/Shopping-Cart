import { OnDestroy, OnInit } from '@angular/core';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
/**
 * Dropdown filter component.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DropdownFilterComponent implements OnDestroy, OnInit {
    config: DropdownConfigService;
    dataStateService: DropdownDataStateService;
    eventStateService: DropdownEventStateService;
    private dataFilterStream;
    private dataFilterSubscription;
    constructor(config: DropdownConfigService, dataStateService: DropdownDataStateService, eventStateService: DropdownEventStateService);
    /**
     * Clear applied filter value.
     */
    clearFilter(): void;
    /**
     * Filter key up event handler.
     */
    filterKeyUp(): void;
    /**
     * Initialize filter stream debounce.
     */
    private initFilterDebounceEvent;
    /**
     * Lifecycle hook that is called when component is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Lifecycle hook that is called when component is initialized.
     */
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropdownFilterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DropdownFilterComponent, "ng-dropdown-filter", never, {}, {}, never, never>;
}

//# sourceMappingURL=dropdown-filter.component.d.ts.map
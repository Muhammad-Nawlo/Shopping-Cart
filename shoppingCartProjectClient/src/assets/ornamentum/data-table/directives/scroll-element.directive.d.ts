import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableScrollPoint } from '../models/data-table-scroll-point.model';
/**
 * Scroll element directive.
 * Used to set scroll position to target element.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ScrollElementDirective implements AfterViewInit, OnDestroy {
    private el;
    private scrollPositionSubscription;
    ngScrollElement: Subject<DataTableScrollPoint>;
    constructor(el: ElementRef);
    /**
     * After component initialize lifecycle event handler.
     */
    ngAfterViewInit(): void;
    /**
     * Component destroy lifecycle event handler.
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ScrollElementDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<ScrollElementDirective, "[ngScrollElement]", never, { "ngScrollElement": "ngScrollElement"; }, {}, never>;
}

//# sourceMappingURL=scroll-element.directive.d.ts.map
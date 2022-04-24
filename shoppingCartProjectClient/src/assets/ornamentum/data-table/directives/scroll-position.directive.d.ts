import { ElementRef, AfterViewInit, NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableScrollPoint } from '../models/data-table-scroll-point.model';
/**
 * Scroll position directive.
 * Track current scroll position of target element.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ScrollPositionDirective implements AfterViewInit, OnDestroy {
    private el;
    private zone;
    private scrollEventSubscription;
    ngScrollPosition: Subject<DataTableScrollPoint>;
    constructor(el: ElementRef, zone: NgZone);
    /**
     * After component initialize lifecycle event handler.
     */
    ngAfterViewInit(): void;
    /**
     * Component destroy lifecycle event handler.
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ScrollPositionDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<ScrollPositionDirective, "[ngScrollPosition]", never, { "ngScrollPosition": "ngScrollPosition"; }, {}, never>;
}

//# sourceMappingURL=scroll-position.directive.d.ts.map
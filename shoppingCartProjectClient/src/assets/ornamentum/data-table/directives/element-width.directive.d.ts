import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
/**
 * Element width directive.
 * Used to emit target element width after view init.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ElementWidthDirective implements AfterViewInit {
    private el;
    ngElementWidth: EventEmitter<{}>;
    constructor(el: ElementRef);
    /**
     * After component view initialize lifecycle event handler.
     */
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ElementWidthDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<ElementWidthDirective, "[ngElementWidth]", never, {}, { "ngElementWidth": "ngElementWidth"; }, never>;
}

//# sourceMappingURL=element-width.directive.d.ts.map
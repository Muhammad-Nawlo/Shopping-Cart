import { ApplicationRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { ComponentLoader } from './component-loader.interface';
import { GlobalRefService } from './global-ref.service';
import { ResizeService } from './resize.service';
/**
 * Popover component loader factory service.
 */
import * as ɵngcc0 from '@angular/core';
export declare class PopoverComponentLoaderFactoryService {
    private componentFactoryResolver;
    private appRef;
    private globalRefService;
    private resizeService;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, globalRefService: GlobalRefService, resizeService: ResizeService);
    /**
     * Create new component loader.
     * @param renderer Angular renderer reference.
     * @return Popover component loader reference.
     */
    createLoader<T>(renderer: Renderer2): ComponentLoader<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<PopoverComponentLoaderFactoryService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<PopoverComponentLoaderFactoryService>;
}

//# sourceMappingURL=popover-component-loader-factory.service.d.ts.map
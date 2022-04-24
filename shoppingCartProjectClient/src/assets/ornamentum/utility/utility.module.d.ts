import { ModuleWithProviders } from '@angular/core';
/**
 * Module representing utility providers, directives and pipes.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './directives/init.directive';
import * as ɵngcc2 from './directives/focus.directive';
import * as ɵngcc3 from './pipes/pixel-converter.pipe';
import * as ɵngcc4 from '@angular/common';
export declare class UtilityModule {
    /**
     * Set module root configuration overrides.
     * @return Module with custom providers.
     */
    static forRoot(): ModuleWithProviders<UtilityModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<UtilityModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<UtilityModule, [typeof ɵngcc1.InitDirective, typeof ɵngcc2.FocusDirective, typeof ɵngcc3.PixelConverterPipe], [typeof ɵngcc4.CommonModule], [typeof ɵngcc1.InitDirective, typeof ɵngcc2.FocusDirective, typeof ɵngcc3.PixelConverterPipe]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<UtilityModule>;
}
export { ComponentLoader } from './services/component-loader.interface';
export { DragAndDropService } from './services/drag-and-drop.service';
export { GlobalRefService } from './services/global-ref.service';
export { UtilityConfigService } from './services/utility-config.service';
export { PopoverComponentLoaderFactoryService } from './services/popover-component-loader-factory.service';
export { PopoverComponentLoader } from './services/popover-component-loader.class';

//# sourceMappingURL=utility.module.d.ts.map
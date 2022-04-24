import { ModuleWithProviders } from '@angular/core';
import { DropdownHttpResourceFactoryService } from './services/dropdown-http-resource-factory.service';
import { DropdownWebsocketResourceFactoryService } from './services/dropdown-websocket-resource-factory.service';
/**
 * Dropdown data source module.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../resource-utility/resource-utility.module';
export declare class DropdownResourceModule {
    /**
     * Set module root configuration overrides.
     * @return Module with custom providers.
     */
    static forRoot(): ModuleWithProviders<DropdownResourceModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropdownResourceModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<DropdownResourceModule, never, [typeof ɵngcc1.ResourceUtilityModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<DropdownResourceModule>;
}
export { DropdownHttpDataFetchService } from './services/dropdown-http-data-fetch.service';
export { DropdownHttpResourceFactoryService };
export { DropdownWebsocketDataFetchService } from './services/dropdown-websocket-data-fetch.service';
export { DropdownWebsocketResourceFactoryService };

//# sourceMappingURL=dropdown-resource.module.d.ts.map
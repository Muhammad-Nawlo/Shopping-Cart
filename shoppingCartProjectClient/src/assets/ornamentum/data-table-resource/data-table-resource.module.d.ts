import { ModuleWithProviders } from '@angular/core';
import { DataTableHttpResourceFactoryService } from './services/data-table-http-resource-factory.service';
import { DataTableWebsocketResourceFactoryService } from './services/data-table-websocket-resource-factory.service';
/**
 * Data table data source module.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../resource-utility/resource-utility.module';
export declare class DataTableResourceModule {
    /**
     * Set module root configuration overrides
     * @return Module with custom providers
     */
    static forRoot(): ModuleWithProviders<DataTableResourceModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DataTableResourceModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<DataTableResourceModule, never, [typeof ɵngcc1.ResourceUtilityModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<DataTableResourceModule>;
}
export { DataTableHttpDataFetchService } from './services/data-table-http-data-fetch.service';
export { DataTableHttpResourceFactoryService };
export { DataTableWebsocketDataFetchService } from './services/data-table-websocket-data-fetch.service';
export { DataTableWebsocketResourceFactoryService };

//# sourceMappingURL=data-table-resource.module.d.ts.map
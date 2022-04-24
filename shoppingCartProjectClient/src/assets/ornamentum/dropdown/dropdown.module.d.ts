import { ModuleWithProviders } from '@angular/core';
import { DropdownConfig } from './models/dropdown-config.model';
/**
 * Module representing dropdown component.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './components/dropdown/dropdown.component';
import * as ɵngcc2 from './components/dropdown-view/dropdown-view.component';
import * as ɵngcc3 from './components/dropdown-filter/dropdown-filter.component';
import * as ɵngcc4 from './components/dropdown-options/dropdown-options.component';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from '@angular/forms';
import * as ɵngcc7 from '../utility/utility.module';
export declare class DropdownModule {
    /**
     * Set module root configuration overrides.
     * @param dropdownConfig Dropdown configuration object.
     * @return Module with custom providers.
     */
    static forRoot(dropdownConfig?: DropdownConfig): ModuleWithProviders<DropdownModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropdownModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<DropdownModule, [typeof ɵngcc1.DropdownComponent, typeof ɵngcc2.DropdownViewComponent, typeof ɵngcc3.DropdownFilterComponent, typeof ɵngcc4.DropdownOptionsComponent], [typeof ɵngcc5.CommonModule, typeof ɵngcc6.FormsModule, typeof ɵngcc7.UtilityModule], [typeof ɵngcc1.DropdownComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<DropdownModule>;
}
export { DropdownTranslations } from './models/dropdown-translations.model';
export { DropdownOption } from './models/dropdown-option.model';
export { DropdownRequestParams } from './models/dropdown-request-params.model';
export { DropdownFilter } from './models/dropdown-filter.model';
export { DropdownDataBindCallback } from './models/dropdown-data-bind-callback.model';
export { DropdownQueryResult } from './models/dropdown-query-result.model';
export { DropdownConfig } from './models/dropdown-config.model';
export { DropdownSelectMode } from './models/dropdown-select-mode.model';
export { DropdownComponent } from './components/dropdown/dropdown.component';

//# sourceMappingURL=dropdown.module.d.ts.map
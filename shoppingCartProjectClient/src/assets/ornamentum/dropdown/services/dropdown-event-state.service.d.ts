import { EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
/**
 * Dropdown event state service; Manage dropdown event handler state.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DropdownEventStateService {
    dataFetchStream: EventEmitter<boolean>;
    dataBoundStream: EventEmitter<void>;
    selectChangeStream: EventEmitter<any>;
    initStream: EventEmitter<DropdownComponent>;
    staticDataSourceStream: ReplaySubject<any[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropdownEventStateService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<DropdownEventStateService>;
}

//# sourceMappingURL=dropdown-event-state.service.d.ts.map
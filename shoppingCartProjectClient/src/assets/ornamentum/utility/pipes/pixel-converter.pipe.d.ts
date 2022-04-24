import { PipeTransform } from '@angular/core';
/**
 * Pixel converter pipe.
 * Append 'px' if value is number type, else return the same.
 */
import * as ɵngcc0 from '@angular/core';
export declare class PixelConverterPipe implements PipeTransform {
    /**
     * Pipe transform implementation.
     * @param value Source value.
     * @returns Converted pixel value.
     */
    transform(value: string | number): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<PixelConverterPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDeclaration<PixelConverterPipe, "ngPx">;
}

//# sourceMappingURL=pixel-converter.pipe.d.ts.map
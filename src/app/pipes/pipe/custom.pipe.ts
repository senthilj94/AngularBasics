import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'append'
})

export class AppendPipe implements PipeTransform {
    transform(value, appendText) {
        return value + appendText;
    }
}


@Pipe({
    name: 'filter',
    pure: false // Impure Pipe
})

export class FilterPipe implements PipeTransform {
    transform(value, field, filterValue) {
        console.log('Filter Pipe Called');
        if (value && value.length > 0) {
            return value.filter(x => x[field] === filterValue);
        } else {
            return [];
        }
    }
}

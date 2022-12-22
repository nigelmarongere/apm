// import(s)
import { Pipe, PipeTransform } from "@angular/core";

// decorators
@Pipe({
    name: 'convertToSpaces'
})

// class
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }
}
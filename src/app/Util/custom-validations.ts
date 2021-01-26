import { AbstractControl } from '@angular/forms'

export class Validationm
{
    static age(control :AbstractControl){
        let value = control.value
        if (value>15)
            return { "valorprueba" : value }
        return null 
    }
}
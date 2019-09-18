import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Person extends ConvectorModel<Person> {
    readonly type: string;
    name: string;
    created: number;
    modified: number;
}

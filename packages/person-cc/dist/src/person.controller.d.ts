import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Person } from './person.model';
export declare class PersonController extends ConvectorController<ChaincodeTx> {
    create(person: Person): Promise<void>;
}

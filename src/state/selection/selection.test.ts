
import { type } from 'os';
import SelectionReducer , {ISelectionState} from './reducer';

test('should return the initial state', () => {
  expect(SelectionReducer(undefined , {} as any)).toEqual({});
});
test('Should return type of the initial state', () => {
    expect(typeof SelectionReducer(undefined , {} as any)).toEqual('object');
})
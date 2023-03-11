
import SelectionReducer from './reducer';

test('should return the initial state', () => {
  expect(SelectionReducer(undefined , {} as any)).toEqual({});
});
test('Should return type of the initial state', () => {
    expect(typeof SelectionReducer(undefined , {} as any)).toEqual('object');
})
import TokenReducer from './reducer';

test('should return the initial state', () => {
  expect(TokenReducer(undefined , {} as any)).toEqual([]);
});
test('Should return type of the initial state', () => {
    expect(typeof TokenReducer(undefined , {} as any)).toEqual('object');
})
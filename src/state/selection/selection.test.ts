
import React from 'react';
import { IWorkbookResponse } from './actions';
import SelectionReducer from './reducer';

test('should return the initial state', () => {
  // @ts-ignore
  expect( SelectionReducer(undefined, {})).toEqual(
    {
        baseToken: null,
        quoteToken: null,
        workbook: {} as IWorkbookResponse,
        message: '',
        depths: [],
        bids: [],
        asks: [],
    }
  );
});
import reducer from '../admin';
import {
  Map as ImmutableMap,
  List as ImmutableList,
  OrderedSet as ImmutableOrderedSet,
  fromJS,
} from 'immutable';

describe('admin reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(fromJS({
      reports: [],
      open_report_count: 0,
      users: ImmutableMap(),
      awaitingApproval: ImmutableOrderedSet(),
      configs: ImmutableList(),
      needsReboot: false,
    }));
  });
});

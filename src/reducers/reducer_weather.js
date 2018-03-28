import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //key! never manipulate state with like state.push(x) bla bla never!
      //return state.concat({action.payload.data}); - one way of doing and ES16->
      return [ action.payload.data, ...state ];
  }

  return state;
}

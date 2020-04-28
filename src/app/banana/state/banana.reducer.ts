import { State } from "./banana.state";
import {
  BananaAction,
  GET_NEW_BANANA,
  PEEL_BANANA,
  EAT_BANANA,
} from "./banana.actions";

export const reducer = (state: State, action: BananaAction): State => {
  console.log(`Reducer`, action);
  switch (action.type) {
    case GET_NEW_BANANA: {
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: "yellow",
      };
    }
    case PEEL_BANANA: {
      return {
        ...state,
        isPeeled: true,
      };
    }
    case EAT_BANANA: {
      return {
        ...state,
        bitesRemaining: state.bitesRemaining - action.payload,
      };
    }
    default:
      return state;
  }
};

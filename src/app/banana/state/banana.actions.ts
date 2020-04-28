import { Action } from "@ngrx/store";

export const GET_NEW_BANANA = "Get New Banana";
export const PEEL_BANANA = "Peel Banana";
export const EAT_BANANA = "Eat Banana";
export const START_TIME_HOP = "TIME HOP START";
export const FINISH_TIME_HOP = "TIME HOP FINISH";

export class GetNewBanana implements Action {
  readonly type: string = GET_NEW_BANANA;

  constructor(public payload: any) {
    console.log(`actionType: ${this.type}`);
  }
}

export class PeelBanana implements Action {
  readonly type: string = PEEL_BANANA;

  constructor(public payload: any) {
    console.log(`actionType: ${this.type}`);
  }
}

export class TimeHopStart implements Action {
  readonly type: string = START_TIME_HOP;

  constructor(public payload: any) {
    console.log(`actionType: ${this.type}`);
  }
}

export class TimeHopFinish implements Action {
  readonly type: string = FINISH_TIME_HOP;

  constructor(public payload: any) {
    console.log(`actionType: ${this.type}`);
  }
}

export class EatBanana implements Action {
  readonly type: string = EAT_BANANA;

  constructor(public payload: number) {
    console.log(`actionType: ${this.type}`);
  }
}

export type BananaAction =
  | GetNewBanana
  | PeelBanana
  | EatBanana
  | TimeHopFinish
  | TimeHopStart;

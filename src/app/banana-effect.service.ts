import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { RotService } from "./rot.service";
import { START_TIME_HOP, TimeHopStart, TimeHopFinish } from "./banana/state";
import { switchMap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BananaEffectService {
  constructor(private actions$: Actions, private rotService: RotService) {}

  @Effect()
  startTimeHop$ = this.actions$.pipe(
    ofType(START_TIME_HOP),
    switchMap((action: TimeHopStart) => {
      return this.rotService
        .rotBanana()
        .pipe(map((color) => new TimeHopFinish(color)));
    })
  );
}

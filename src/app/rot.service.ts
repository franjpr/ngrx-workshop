import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class RotService {
  private tenSeconds: number = 10000; // 10 seconds

  constructor() {}

  rotBanana(): Observable<any> {
    console.log("ROT BANANA");
    return of("brown").pipe(delay(this.tenSeconds), tap(console.log));
  }
}

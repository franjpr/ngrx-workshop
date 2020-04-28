import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-banana",
  templateUrl: "./banana.component.html",
  styleUrls: ["./banana.component.css"],
})
export class BananaComponent implements OnInit {
  title = "My NgRx Banana App";
  banana$: Observable<any>;
  constructor() {}

  ngOnInit() {}

  newBanana() {}

  peelBanana() {}

  eatBanana() {}

  timeHop() {}
}

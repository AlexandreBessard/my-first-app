import {Component} from "@angular/core";
// Decorator
@Component({ // javascript object
  selector: "app-server",
  templateUrl: "./server.component.html", // need a relative path
  styles: [`
    .online {
      color: pink;
    }
  `]
})
// Component is like a typescript class
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }


  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }

}

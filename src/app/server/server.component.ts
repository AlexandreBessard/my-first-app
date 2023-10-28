import {Component} from "@angular/core";
// Decorator
@Component({ // javascript object
  selector: "app-server",
  templateUrl: "./server.component.html" // need a relative path
})
// Component is like a typescript class
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";


  getServerStatus(): string {
    return this.serverStatus;
  }
}

import { Component } from '@angular/core';
import {Events} from "./eventsdo"
@Component({
  selector: 'app-eventdo',
  templateUrl: './eventdo1.component.html',
  styleUrls: ['./eventdo1.component.css']
})
export class Eventdo1Component {

   events : Events[] = [];
   newEvent :  string;

   saveEvent(){
    if(this.newEvent) {
      let event = new Events();
      event.name = this.newEvent;
      event.isCompleted = true;
      this.events.push(event);
      this.newEvent = ''
    }
   }

   done(x:number) {
    this.events[x].isCompleted = !this.events[x].isCompleted;
   }

   remove(id:number) {
    this.events = this.events.filter( (v, i) => i !== id )
   }
}

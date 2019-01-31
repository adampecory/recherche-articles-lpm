import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] = [];
  
  constructor() { }

  //Add a message in an aray
  add(message : string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

import { compileClassDebugInfo, computeMsgId } from '@angular/compiler';
import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  getRandomTime() {
    const hours = Math.floor(Math.random()*24).toString().padStart(2,'0');
    const minutes = Math.floor(Math.random()*60).toString().padStart(2,'0');

    return hours + ':' + minutes
  }

  private lists = signal<User[]>([
      { name:"Hannah", text:"Che fai stasera?", time:this.getRandomTime(), count:`${Math.floor(Math.random()*35)}`},
      { name:"Pippo", text:"Ok grazie", time:this.getRandomTime(), count:`${Math.floor(Math.random()*35)}`},
      { name:"Andrea", text:"Abbiamo lo stesso nome ahahha", time:`${Math.floor(Math.random()*24)}:${Math.floor(Math.random()*60).toString().padStart(2,'0')}`, count:`${Math.floor(Math.random()*35)}`},
      { name:"Paolo", text:"Facciamo un applauso!", time:this.getRandomTime(), count:`${Math.floor(Math.random()*35)}`},
      { name:"UniPi-Informatica", text:"Qualcuno può rispondere!!??!?!?", time:this.getRandomTime(), count:`${Math.floor(Math.random()*35)}`},
      { name:"Gina", text:"Hello!", time:this.getRandomTime(), count:`${Math.floor(Math.random()*35)}`},
  ]);

  dblists = computed(()=>this.lists());

  private messages = signal<Message[]> ([
      {sr:"received", text:"Che fai stasera?", time:"13:38"},
      {sr:"received", text:"Tutto ok", time:"13:38"},
      {sr:"sent", text:"Tutto bene, te?", time:"13:35"},
      {sr:"sent", text:"Ehi", time:"13:35"},
      {sr:"received", text:"Ciao, come va?", time:"13:33"}
  ]);

  dbmessages = computed(()=>this.messages())

  getLists() {
      return this.lists;
  }

  getMessages() {
      return this.messages;
  }

  addMessage(sr:'sent'|'received', text:string) {
      const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2,'0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const msg:Message = {
            sr:sr,
            text:text,
            time:hours+':'+minutes
        }
      this.messages().unshift(msg);
  }
}

export interface User {
  name: string
  text: string
  time: string
  count: string
}

export interface Message {
  sr: 'sent'|'received'
  text: string
  time: string
}

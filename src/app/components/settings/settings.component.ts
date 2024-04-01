import { Component, EventEmitter, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ChatListComponent } from '../chat-list/chat-list.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [IconComponent, ChatListComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  settings:string[]=["Generale", "Account", "Chat", "Video e audio", "Notifiche", "Personalizzazione", "Archiviazione", "Collegamenti rapidi", "Aiuto", "Profilo"];

  @Output() closed = new EventEmitter();
}

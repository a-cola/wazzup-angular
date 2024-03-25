import { Component, inject, input } from '@angular/core';
import { DbService } from '../../services/db.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-opened-chat',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './opened-chat.component.html',
  styleUrl: './opened-chat.component.css'
})
export class OpenedChatComponent {
  db = inject(DbService)

  id = input.required<string>();
}

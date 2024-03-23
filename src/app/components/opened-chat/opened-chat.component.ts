import { Component, inject } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RecvMsgComponent } from '../recv-msg/recv-msg.component';
import { SendMsgComponent } from '../send-msg/send-msg.component';

@Component({
  selector: 'app-opened-chat',
  standalone: true,
  imports: [RecvMsgComponent, SendMsgComponent],
  templateUrl: './opened-chat.component.html',
  styleUrl: './opened-chat.component.css'
})
export class OpenedChatComponent {
  db = inject(DbService)
}

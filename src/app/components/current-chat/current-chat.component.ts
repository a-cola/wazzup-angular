import { Component, inject } from '@angular/core';
import { OpenedChatComponent } from '../opened-chat/opened-chat.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-current-chat',
  standalone: true,
  imports: [OpenedChatComponent, ReactiveFormsModule],
  templateUrl: './current-chat.component.html',
  styleUrl: './current-chat.component.css'
})
export class CurrentChatComponent {
  text = new FormControl('', Validators.required)

  db = inject(DbService)

  onKeyUp(e: KeyboardEvent) {
    if(e.key === 'Enter' && this.text.valid) {
      this.db.addMessage('sent', this.text.value!)
      this.text.setValue('')
    }
    if(e.key === 'Control' && this.text.valid) {
      this.db.addMessage('received', this.text.value!)
      this.text.setValue('')
    }
    if(e.key === 'Escape') {
      this.text.setValue('')
    }
  }
}

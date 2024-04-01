import { Component, inject, input } from '@angular/core';
import { OpenedChatComponent } from '../opened-chat/opened-chat.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Router } from '@angular/router';

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

  id = input.required<string>();

  router = inject(Router);

  isOnline = false;
  lastAccess = 1;

  ngOnChanges() {
    this.isOnline = Math.random() < 0.1;
    this.lastAccess = Math.floor(Math.random()*59+1);
  }

  onKeyUp(e: KeyboardEvent) {
    if(e.key === 'Enter' && this.text.valid) {
      this.db.addMessage(this.id(), 'sent', this.text.value!)
      this.text.setValue('')
    }
    if(e.key === 'Control' && this.text.valid) {
      this.db.addMessage(this.id(), 'received', this.text.value!)
      this.text.setValue('')
    }
    if(e.key === 'Escape') {
      this.text.setValue('')
    }
  }
}

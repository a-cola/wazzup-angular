import { Component, computed, inject, input } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-chat-small',
  standalone: true,
  imports: [],
  templateUrl: './chat-small.component.html',
  styleUrl: './chat-small.component.css'
})
export class ChatSmallComponent {
  db = inject(DbService)

  name = input.required()
  label = input.required()
  time = input.required()
  count = input.required()
}

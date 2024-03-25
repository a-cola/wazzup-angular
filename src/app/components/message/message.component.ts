import { Component, Input, inject, input } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  type = input.required<string>();
  name = input.required<string>();
  label = input.required<string>();
  time = input.required<string>();

  db = inject(DbService);
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-small',
  standalone: true,
  imports: [],
  templateUrl: './chat-small.component.html',
  styleUrl: './chat-small.component.css'
})
export class ChatSmallComponent {
  name = input.required()
  label = input.required()
  time = input.required()
  count = input.required()
}

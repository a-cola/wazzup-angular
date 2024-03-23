import { Component, input } from '@angular/core';

@Component({
  selector: 'app-recv-msg',
  standalone: true,
  imports: [],
  templateUrl: './recv-msg.component.html',
  styleUrl: './recv-msg.component.css'
})
export class RecvMsgComponent {
  label = input.required();
  time = input.required();
}

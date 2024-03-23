import { Component, input } from '@angular/core';

@Component({
  selector: 'app-send-msg',
  standalone: true,
  imports: [],
  templateUrl: './send-msg.component.html',
  styleUrl: './send-msg.component.css'
})
export class SendMsgComponent {
  label = input.required();
  time = input.required();
}

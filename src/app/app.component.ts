import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wazzup-angular';
}

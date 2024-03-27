import { Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

export const routes: Routes = [
    {path:'chatlist', component:StartPageComponent},
    {path:'chatlist/:id', component:ChatPageComponent},
    {path: '', redirectTo:'chatlist', pathMatch:'full'},
];

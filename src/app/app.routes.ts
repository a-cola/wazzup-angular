import { Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    {path:'', redirectTo:'chatlist', pathMatch:'full'},
    {path:'chatlist', component:StartPageComponent},
    {path:'chatlist/:id', component:ChatPageComponent},
    {path:'**', pathMatch:'full', component:ErrorPageComponent}
];

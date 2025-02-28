import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { TestingComponent } from './testing/testing.component';
import { PrivateComponent } from './private-chat/privateChat.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'admin', component: TestingComponent },
    { path: 'privateChat/:senderId/:receiverId', component: PrivateComponent },
];
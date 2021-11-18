import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MessagesService } from './message/messages.service';
import { UsersService } from './user/users.service';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ThreadsService } from './thread/threads.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatNavBarComponent,
    ChatPageComponent,
    FromNowPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessagesService, UsersService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Thread } from "../thread/thread.model";
import { User } from "../user/user.model";
import { Message } from "./message.model";
import { map, scan, publishReplay, refCount, filter } from 'rxjs/operators';

const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
    (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {
    newMessages: Subject<Message> = new Subject<Message>();
    messages: Observable<Message[]>;
    updates: Subject<any> = new Subject<any>();
    create: Subject<Message> = new Subject<Message>();
    markThreadAsRead: Subject<any> = new Subject<any>();

    constructor(){
        this.messages = this.updates.pipe(scan((messages: Message[], operation: IMessagesOperation) => {
            return operation(messages);
        }, initialMessages)).pipe(publishReplay(1)).pipe(refCount());

        this.create.pipe(
            map(function(message: Message): IMessagesOperation {
                return (messages: Message[]) => {
                    return messages.concat(message);
                };
            })
        ).subscribe(this.updates);

        this.newMessages.subscribe(this.create);
    }

    addMessage(message: Message): void{
        this.newMessages.next(message);
    }

    messagesForThreadUser(thread: Thread, user: User): Observable<Message>{
        return this.newMessages.pipe(filter((message: Message) => {
            return (message.thread.id === thread.id) && (message.author.id !== user.id);
        }))
        
    }

}

export const messagesServiceInjectables: Array<any> = [
    MessagesService
  ];
  
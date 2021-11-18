import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  contacts$: any;
  users: any;
  userStatus: any;
  listUsers$: any;
  userDetails: any;
  userMsg: any;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    //Example #1
    this.users = ['ram', 'lisa', ' sita', 'mark'];

    this.contacts$ = of(this.users);
    console.log(this.contacts$);

    //Example #2
    new Observable(observer => {

      setTimeout(() => {
        observer.next('In progress')
      }, 2000);

      setTimeout(() => {
        observer.next('Pending')
      }, 4000);

      setTimeout(() => {
        observer.next('Completed')
      }, 6000);
    }).subscribe(data => {
      this.userStatus = data;
    }, error => {
      console.log(error);
    });

    //Example #3 subscribe
    this.contactsService.getUsers().subscribe(data => {
      this.listUsers$ = data;
    }, error => {
      console.log(error);
    })

    //Example #4 toPromise
    this.contactsService.viewUser().toPromise()
    .then(response => {
      this.userDetails = response;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      this.userMsg = "User Details loaded";
    })

    //Example #5
    




  }

}

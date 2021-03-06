import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  users$: Observable<User[]> = this.userService.userList$;
  subscribeForDeleteItem: User = new User();

  filterPhrase: string = '';
  filterKey: string = 'name';

  sortby: string = 'id';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  subscribeForDelete(subscribeForDeleteItem: User): void {
    this.subscribeForDeleteItem = subscribeForDeleteItem;
  }

  delete(): void {
    this.userService.remove(this.subscribeForDeleteItem)
      .subscribe(() => this.userService.getAll());
  }

  setSorter(param: string): void {
    this.sortby = param;
  }

}

import { Component, inject } from '@angular/core';
import { ApiUsersService } from '../api-users.service';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [NgFor,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  private _api = inject(ApiUsersService);
  private _router = inject(Router)

  arr = [
    {
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      image: '',
      id: ''

    }
  ]

  ngOnInit() {
    this._api.getAll().subscribe((res: any) => {
      console.log(res)
      this.arr = res;
    })
  }

  moreDetails(id: any) {
    this._router.navigate(['users', id]);
  }

  deleteUser(temp: any) {
    this._api.deleteById(temp).subscribe((res: any) => {
      this.ngOnInit()
    })
  }
}
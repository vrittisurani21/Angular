import { Component,inject} from '@angular/core';
import { ApiUsersService } from '../api-users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  private _api = inject(ApiUsersService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);


  userDetails = {
    username: '',
    password: '',
    email: '',
    id: '',
    image:''
  };


  ngOnInit() {
    const userId = this._route.snapshot.paramMap.get('id');
    if (userId) {
      this._api.getById(userId).subscribe((res: any) => {
        this.userDetails = res;
      }, (error: any) => {
        console.error('Error fetching user details:', error);
      });
    }
  }

  goBack(){
    this._router.navigate([''])
  }

  deleteUser(){
    this._api.deleteById(this.userDetails.id).subscribe((res: any) => {
      this.goBack()
  })
  }
}

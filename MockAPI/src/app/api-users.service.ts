import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  apiurl = "https://67b2c5f6bc0165def8ce7ea8.mockapi.io/users" 


  constructor(private _http : HttpClient) {  }
  getAll(){
    return this._http.get(this.apiurl);
  } 

  getById(id:any){
    return this._http.get(this.apiurl+'/'+id);
  }

  deleteById(id:any){
    return this._http.delete(this.apiurl+'/'+id);
  }

  addUser(obj: any): Observable<any> {
    return this._http.post<any>(this.apiurl, obj); 
  }
  
  editUser(id:any,obj:any){
    return this._http.put(this.apiurl+"/"+id,obj)
  }
}

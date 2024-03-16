import { HttpClientModule } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../core/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    constructor(private http: HttpClient) {
    }
    
    createUser(user: User): Observable<any> {
        return this.http.post('http://localhost:8080/usuarios', user);
    }
}
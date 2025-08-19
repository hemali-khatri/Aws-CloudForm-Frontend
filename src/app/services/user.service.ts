// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root' // This will still allow for global usage if you ever need it
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor() {}

  getUsers(): Promise<any[]> {
    return axios.get(this.apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching users:', error);
        return [];  // Return an empty array in case of error
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service'; // Import the service
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports:[CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [UserService]  // Provide the service directly at the component level
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  async ngOnInit(): Promise<void> {
    try {
      const data = await this.userService.getUsers();  // Fetch users using Promise
      console.log('Users fetched:', data);
      this.users = data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}

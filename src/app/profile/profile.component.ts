import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile[] = [];

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.userProfile = this.getUserProfile();
  }

  getUserProfile = () => {
    return this.profileService.getUserProfile()
  }


}

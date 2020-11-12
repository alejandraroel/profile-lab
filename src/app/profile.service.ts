import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile: UserProfile[] = [
    {
      name: "Alejandra Roel",
      contact: "313-504-2048",
      bio: "I have a dog named Kimmy and I like strawberries and nutella for breakfast."
    }
  ];

  constructor() { }

  getUserProfile = () => {
    return this.userProfile;
  };

  setUserProfile = () => {

  };

}

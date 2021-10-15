import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interface/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  profileInformations!: User;

  profileInformationtemp!: User;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  getProfileInformations() {
    //  const profileInformations = {
    //     image: "/assets/profile-1.png",
    //     name: "Thomas Tay",
    //     title: "Executive Manager",
    //     bio: "I'm on a seafood diet",
    //     organisation: "company",
    //   //   "team": "team A",
    //     location: "Singapore",
    //     email: "john@company.com",
    //     password: "********",
    //   // "notifications": 2
    //   }
    // return profileInformations;
    this.userService.getUser().subscribe(user => this.profileInformations = user)
  }

  edit = false;
  onEdit() {
    this.edit = true;
    this.profileForm = this.fb.group({
      name: [this.profileInformations.name, Validators.required],
      title: [this.profileInformations.title, Validators.required],
      bio: [this.profileInformations.bio, Validators.required],
      organization: [this.profileInformations.organization, Validators.required],
      location: [this.profileInformations.location, Validators.required],
      email: [this.profileInformations.email, Validators.compose([Validators.required, Validators.email])],
      password: [this.profileInformations.password, Validators.required]
    });
    // this.profileInformationtemp = { ...this.profileInformations };
  }


  onsubmit() {
    // this.profileInformations = { ...this.profileInformationtemp }
    this.edit = false;
    console.log(this.profileForm.value);
    this.profileInformations = { ...this.profileInformations, ...this.profileForm.value };
    this.userService.setUser(this.profileInformations);
  }

  onCancel() {
    this.edit = false;
  }

  ngOnInit(): void {
    this.getProfileInformations();
    // this.profileForm = this.fb.group({
    //   name: ['', Validators.required],
    //   title: ['', Validators.required],
    //   bio: ['', Validators.required],
    //   organization: ['', Validators.required],
    //   location: ['', Validators.required],
    //   email: ['', Validators.compose([Validators.required,Validators.email])],
    //   password: ['', Validators.required]
    // });
    // this.profileInformations = this.getProfileInformations();
    console.log("profile", this.profileInformations)
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, User } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  user = JSON.parse(localStorage.getItem("CURRENT_USER"))

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  uppdateForm: FormGroup;
  isSubmitted: boolean = false;

  ngOnInit() {
    const _currentUser = JSON.parse(localStorage.getItem("CURRENT_USER"))
    this.uppdateForm = this.formBuilder.group({
      firstname: [_currentUser.firstname, Validators.required],
      mellanname: [_currentUser.mellanname, Validators.required],      
      lastname: [_currentUser.lastname, Validators.required],
      birthday:[_currentUser.birthday, Validators.required],
     
      addresslinefaktura: [_currentUser.addresslinefaktura ],
      postnumber:   [_currentUser.postnumber ],
      invoicecity:   [_currentUser.invoicecity ],
      invoicecountry:[_currentUser.invoicecountry ],
      addressline: [_currentUser.addressline],
      zipcode: [_currentUser.zipcode ],
      city: [_currentUser.city ],
      email: [_currentUser.email],
      password: [_currentUser.password ]
    })
  }
  get formControls() { return this.uppdateForm.controls}

  uppdate( user: User){
  
    this.isSubmitted = true;
    this.authService.update(this.uppdateForm.value).subscribe() 
   
     
     
     
    };
    
  

}





import { Component, Inject, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  imports: [NavComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  profile?: User | undefined | null;

  logo = 'logo.png'
  login = 'login.png'

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    });
  }

}



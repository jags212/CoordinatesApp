import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})
export class CoordinatesComponent implements  OnInit {
  model: string = null;

  constructor(private authService: AuthService, private alertify: AlertifyService) {}
  ngOnInit() {}

  search() {
    this.authService.search(this.model).subscribe((data) => {
      this.alertify.message(data.toString());
    }, error => {
      this.alertify.error('Search Failed !! Try Again');
    });
  }
}

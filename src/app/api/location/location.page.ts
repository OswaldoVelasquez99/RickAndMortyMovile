import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  id = null;
  location:any = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private services: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");

    this.services.getLocation(this.id).then((location) => {
      this.location = location;
      console.log(this.location)
    })
  }
  
  goCharacter(id) {
    this.router.navigateByUrl(`character/${id}`)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  id = null;
  episode:any = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private services: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");

    this.services.getEpisode(this.id).then((episode) => {
      this.episode = episode;
      console.log(this.episode);
    })
  }

  goCharacter(id) {
    this.router.navigateByUrl(`character/${id}`)
  }

}

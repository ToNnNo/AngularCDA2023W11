import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name?: string;
  address?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    /**
     * paramMap  -> Object
     * params     -> Array
     */
    // paramMap ou params permettent de récupérer les paramètres d'url
    this.route.paramMap.subscribe( (param: ParamMap) => {
      const slug = param.get('slug') as string;
      // console.log(slug);

      this.getDetails(slug);
    });
  }

  public getDetails(slug: string): void {
    switch (slug) {
      case 'john':
        this.name = "John Doe";
        this.address = "256 avenue de la marne ...";
        break;
      case 'jane':
        this.name = "Jane Doe";
        this.address = "64 rue du fond de la ville ...";
        break;
      default:
        this.router.navigateByUrl('/404', {
          skipLocationChange: true
        });
    }
  }


}

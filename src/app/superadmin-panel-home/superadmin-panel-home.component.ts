import { AfterContentInit, Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { LazyLoadScriptService } from '../lazy-load-scripts.service';
import { map, filter, take, switchMap } from 'rxjs/operators';

declare var $;

@Component({
  selector: 'app-superadmin-panel-home',
  templateUrl: './superadmin-panel-home.component.html',
  styleUrls: ['./superadmin-panel-home.component.css']
})
export class SuperadminPanelHomeComponent {

  constructor(private lazyLoadService: LazyLoadScriptService) { }

  ngAfterContentInit() {
    this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js')
      .pipe(
        map(_ => 'jQuery is loaded'),
        filter(jquery => !!jquery),
        take(1),
        switchMap(_ => this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js')),
      ) 
      .subscribe(_ => {
        $('.slider-q_status').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]
        });

      });
  }
  
}

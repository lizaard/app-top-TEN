import { HttpClient } from '@angular/common/http';
import { publishFacade } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lizard } from './post.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  DeacuSperSaMearga1: Lizard[] = [];


  constructor(private http: HttpClient) { }

  err: string = '';
  setValue() {
    this.err = String(this.DeacuSperSaMearga1);
  }

  ngOnInit(): void {

    this.http
      .get<Lizard>('https://www.reddit.com/r/soccer/top/.json')
      .pipe(map(postList => {
        const AiciFacUnArrayDinObiect = [];
        for (const DreacuStieCeEAsta in postList) {
          if (postList.hasOwnProperty(DreacuStieCeEAsta)) {
            AiciFacUnArrayDinObiect.push(postList);

          }
        }
        return AiciFacUnArrayDinObiect;
      })
      )
      .subscribe(post => {
        let postChild = post[1].data.children;

        const HabarNuam = [];
        const HabarNuam2 = [];

        for (let i = 0; i < 10; i++) {
          let postChildDataTwo = postChild[i].data;
          HabarNuam2.push("https://www.reddit.com" + postChildDataTwo.permalink);
          HabarNuam.push(postChildDataTwo)
        }

        HabarNuam.push(HabarNuam2)

        this.DeacuSperSaMearga1 = HabarNuam;


      });

  }

}

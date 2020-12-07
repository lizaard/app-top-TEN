import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Lizard } from './post.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  postsArray: Lizard[] = [];


  constructor(private http: HttpClient) { }

  addItem(title: any) {
    this.postsArray.push(title);
  }

  ngOnInit(): void {
    this.http
      .get<Lizard>('https://www.reddit.com/r/soccer/top/.json')
      .pipe(map(postList => {
        const objTranform = [];
        for (const ID in postList) {
          if (postList.hasOwnProperty(ID)) {
            objTranform.push(postList);
          }
        }
        return objTranform;
      })
      )
      .subscribe(post => {
        let postChild = post[1].data.children;
        const postDetail = [];
        for (let i = 0; i < 10; i++) {
          let postChildDataTwo = postChild[i].data;
          postDetail.push(postChildDataTwo)
        }
        this.postsArray = postDetail;
        console.log(postDetail);

      });
  }

}

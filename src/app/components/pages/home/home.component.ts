import { Component, OnInit } from '@angular/core';
import { PostService } from "../../posts/post.service";
import { Post1 } from "../../../shared/models/post.interface";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public posts$: Observable<Post1[]>;

  constructor(private postSrc: PostService) { }

  ngOnInit(): void {
    //console.log(this.postSrc.getAllPost().subscribe(res=> console.log(res)));
    this.posts$= this.postSrc.getAllPost();
  }

}

import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore'
import { from, Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from "rxjs/operators";
import { Post1 } from "../../shared/models/post.interface"
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private afs: AngularFirestore) {}
  public getAllPost(): Observable<Post1[]>{
    const a=this.afs.collection('post').snapshotChanges().pipe(map(
      actions =>
        actions.map(a =>{ const data = a.payload.doc.data() as Post1;
          const id = data.id;
          return{id,...data};
        })       
      ))
      return a
  }
}

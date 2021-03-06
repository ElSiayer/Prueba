import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';
import { ContainerAppComponent } from "./components/pages/container-app/container-app.component";

const routes: Routes = [
  {path:'', component:ContainerAppComponent,children:[{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  /*{ path: 'posts', loadChildren: () => import('./components/posts/list-posts/list-posts.module').then(m => m.ListPostsModule) },*/
 { path: 'post/:id', component:PostComponent},
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'register', loadChildren: () => import('./components/auth/registro/registro.module').then(m => m.RegistroModule) },  
  {path: '',redirectTo: 'home',pathMatch: 'full'}]},
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import('./components/pages/admin/admin.module').then(m => m.AdminModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

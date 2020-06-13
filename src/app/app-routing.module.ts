import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyMovieComponent } from './components/my-movie/my-movie.component';

const routes: Routes = [
  { path: "", redirectTo: 'myHome', pathMatch: 'full' },
  { path: "myHome", component: MyHomeComponent },
  { path: "myMovie", component: MyMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

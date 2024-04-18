import { Component } from '@angular/core';
import { FreeApiServices } from './services/FreeApi.services';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-product-app';

 public searchTerm: String = '';


 constructor (private _FreeApiService: FreeApiServices) {
 }

 listcomments!: Comments[];

 ngOnInit() {

  this._FreeApiService.getcomments()
  .subscribe 
    (     
       data =>
       {
          this.listcomments = data;
      }
  
    );
 }
 Search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
 }
}

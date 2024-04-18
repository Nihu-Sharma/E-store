import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() 
export class FreeApiServices
{ 
   constructor(private httpclient: HttpClient) {}

    getcomments(): Observable<any> {
       return this.httpclient.get('https://fakestoreapi.com/products');
    }

}

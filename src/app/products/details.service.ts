import { Injectable } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  constructor(private route: ActivatedRoute) { }


}

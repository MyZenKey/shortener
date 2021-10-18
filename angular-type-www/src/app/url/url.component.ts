import { Component, OnInit } from '@angular/core';
import { Url } from '../url';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  urls : Url[];
  constructor(private urlservice: UrlService) { }

  ngOnInit(): void {
    this.urlservice.getUrls().subscribe((data: Url[]) => {
console.log(data);
this.urls = data;
    });
  }

}

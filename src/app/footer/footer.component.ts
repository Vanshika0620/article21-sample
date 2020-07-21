import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email;
  number;
  url;
  constructor() { }

  ngOnInit(): void {
    this.email="vishant@gmail.com"
    this.number=987654321;
  }
  sendmail(){
    
    this.url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to='+this.email+'&su=Your+Subject+here&body=&ui=2&tf=1&pli=1';
    

  window.open(this.url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  }
}

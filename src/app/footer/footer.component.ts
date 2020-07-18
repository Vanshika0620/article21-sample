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
    this.email="naman.18bcs1103@abes.ac.in"
    this.number=7017401169;
  }
  sendmail(){
    
    this.url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to='+this.email+'&su=Your+Subject+here&body=&ui=2&tf=1&pli=1';
    

  window.open(this.url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  }
}

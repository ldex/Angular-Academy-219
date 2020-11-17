import { Router } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../animations';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
        
    constructor(
        private router: Router
    ) { 
        if (typeof Worker !== 'undefined') {
            console.time('web worker');

            // Create a new
            const worker = new Worker('./home.worker', { type: 'module' });
            worker.onmessage = ({ data }) => {
              console.log(`page got message: ${data}`);
              console.timeEnd('web worker');
            };
            worker.postMessage(2000);
          } else {
            // Web Workers are not supported in this environment.
            // You should add a fallback so that your program still executes correctly.
          }
    }

    ngOnInit(): void {
        
    }



}

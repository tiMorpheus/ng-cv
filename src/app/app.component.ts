import { Component } from '@angular/core';
import * as $ from 'jquery';
// import * as responsiveNav from "node_modules/responsive-nav/responsive-nav.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Tymur Tolochko';

    public ngOnInit()
    {
        $(document).ready(function(){

            // var nav = responsiveNav(".nav-collapse");


        });
    }
}

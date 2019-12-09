import { Component, AfterViewInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'demo-frontend';

  ngAfterViewInit() {
    // console.clear();
    // let result = _.attempt(function (argsArray) {
    //   let count = 0;
    //   let sum = argsArray.forEach(element => {
    //     count += element;
    //   });
    //   if (isNaN(count)) {
    //     return Error('error');
    //   } else {
    //     return count;
    //   }
    // }, [1, 2, 3, 4, 5, NaN]);

    // if (_.isError(result)) {
    //   throw Error('You got an Error');
    // } else {
    //   console.log('Successfully got the count as : ' + result);
    // }
  }
}

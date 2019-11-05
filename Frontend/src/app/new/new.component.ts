
import { Component, OnInit } from '@angular/core';
import {Details} from '../Details';
import {DetailsServiceService} from '../details-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  id: string;
  details: Details;
  public display = '';
  searchText;
  constructor(private detailsService: DetailsServiceService) { }

  ngOnInit() {
    this.id = '';
  }

  FetchData() {
    this.details = {} as Details;
    // tslint:disable-next-line:triple-equals
    if (this.id != '') {
    this.detailsService.fetchData(this.id).subscribe(
      userDetails => {
        if (userDetails) {
          this.details = userDetails;
          console.log(this.details);
        }
      }
    );
  } else {
      console.log('Please enter id');
      this.display = 'Please enter id';

    }
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataService } from '../data.service';


@Component({
  selector: 'app-show-person-data',
  templateUrl: './show-person-data.component.html',
  styleUrls: ['./show-person-data.component.css']
})
export class ShowPersonDataComponent implements OnInit {

  dataSource = new UserDataSource(this.dataService);
  displayedColumns = ['firstName', 'lastName', 'email', 'phone'];
  constructor(private dataService: DataService, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.dataService.subject.subscribe((data: any ) => {
      console.log(data);
      this.dataSource = new UserDataSource(this.dataService);
      this.changeDetectorRefs.detectChanges();
    });
  }

}
export class UserDataSource extends DataSource<any> {
  data= [];
   constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<any> {
    return this.dataService.getData();
  }
  disconnect() {
  }
}

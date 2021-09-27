import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserRole } from 'src/app/shared/auth.roles';
import { AuthService } from 'src/app/shared/auth.service';
import { MyfilesService } from '../myfiles.service';
// import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.scss']
})
export class DocumentlistComponent implements OnInit {
  constructor(private authService: AuthService,
    private myfilesService: MyfilesService) { }

  datas: any = [];
  columns: any = [];
  user: any;


  // columns = [
  //   { prop: 'NAME' },
  //   { prop: 'LASTOPENED' },
  //   { prop: 'OWNER' },
  //   { prop: 'CREATED' },
  //   { prop: 'TAGS' },

  // ];

  tableFilter = [
    { name: "title", title: " NAME", status: true },
    { name: "lastOpened", title: "LAST OPENED", status: false },
    { name: "lastCommented", title: "LAST COMMENTED", status: false },
    { name: "publisher", title: "OWNER", status: true },
    { name: "publishedDate", title: "CREATE", status: true },
    { name: "tag", title: "TAGS", status: true },
    { name: "updated", title: "UPDATED", status: false }
  ]
  gettableColumns() {
    const columns = [];
    this.tableFilter.forEach(item => {
      if (item.status)

      columns.push({ prop: item.name, name: item.title })

    })
    return columns;
  }
  updateTablefilterData(dataindex) {
    this.tableFilter[dataindex].status = !this.tableFilter[dataindex].status;
    this.columns = this.gettableColumns();

    // this.tableFilter.status
  }


  // createTabularItems() {
  //   const datas = [];
  //   for (let i = 1; i < 7; i++) {
  //     datas.push({
  //       name: 'John',
  //       lastOpened: '11.40',
  //       lasCommented: '10.00 am',
  //       create: new Date,
  //       owner: 'JOHN',
  //       tags: 'Covid-19 industry report',
  //       updated: new Date
  //     });
  //   }
  //   return datas;
  // }


  createTabularItems() {
    this.myfilesService.createTabularItems().subscribe(datas => {
      this.datas = [...datas]
    });
  }

  async ngOnInit(): Promise<void> {
    await this.authService.getUser().then((user) => {
      this.user = user;
      console.log("DOC LIST")
      this.createTabularItems();
      this.columns = this.gettableColumns();
      // if (this.user){
      //   this.datas = [];
      //   this.columns = [];
      // }
    });

  }
}

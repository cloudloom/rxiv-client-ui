import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-page-preview',
  templateUrl: './page-preview.component.html',
  styleUrls: ['./page-preview.component.scss']
})
export class PagePreviewComponent implements OnInit, OnChanges {
  @Output() previewModalClose = new EventEmitter<boolean>();
  @Input() selected : any;
  urlSafe!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }
  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes, this.selected)
    if (this.selected) {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.selected + '?widget=false&chrome=true&rm=demo');
    }

  }



  ngOnInit(): void {
    console.log("sel",this.selected);
  }

  onCloseModal() {
    this.previewModalClose.emit(true);
  }


}

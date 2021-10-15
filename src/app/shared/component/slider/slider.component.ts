import { Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { SliderItemDirective } from './slider-item.directive';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent{

  @ContentChildren(SliderItemDirective, { read: ElementRef })
  items!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild('slides')
  slidesContainer!: ElementRef<HTMLDivElement>;

  private slidesIndex = 0;

  get currentItem(): ElementRef<HTMLDivElement> | undefined {
    return this.items && this.items.find((item, index) => index === this.slidesIndex);
  }

  ngAfterContentInit() {
    console.log('items', this.items);
  }

  ngAfterViewInit() {
    console.log('slides', this.slidesContainer);
  }

  onClickLeft() {
    if (this.currentItem) {
      //this.slidesContainer.nativeElement.scrollLeft -= this.currentItem.nativeElement.offsetWidth;

      this.slidesContainer.nativeElement.scroll({
        left: this.slidesContainer.nativeElement.scrollLeft - this.currentItem.nativeElement.offsetWidth,
        behavior: 'smooth'
      });
    }


    if (this.slidesIndex > 0) {
      this.slidesIndex--;
    }
  }

  onClickRight() {
    if (this.currentItem) {
      //this.slidesContainer.nativeElement.scrollLeft += this.currentItem.nativeElement.offsetWidth;
      this.slidesContainer.nativeElement.scroll({
        left: this.slidesContainer.nativeElement.scrollLeft + this.currentItem.nativeElement.offsetWidth,
        behavior: 'smooth'
      });
    }

    if (this.slidesIndex < this.items.length - 1) {
      this.slidesIndex++
    }
  }

}

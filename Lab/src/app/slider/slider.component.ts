import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  index : number = 0;
  images: string[] = ["../../assets/cyber-5244032_1920.png" , "../../assets/warehouse-8540045_1920.jpg"];

  moveRight(){
    if(this.index == this.images.length - 1) this.index = 0;
    else this.index++;
  }
  moveLeft(){
    if(this.index == 0) this.index = this.images.length - 1;
    else this.index--;
  }
}

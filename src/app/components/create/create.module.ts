import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared/shared.module';
import { ImageStyleSliderComponent } from './components/image-style-slider/image-style-slider.component';
import { SubmitComponent } from './components/submit/submit.component';
import { UploadModalComponent } from './components/upload-modal/upload-modal.component';

const declarations = [
  ImageStyleSliderComponent,
  UploadModalComponent,
  SubmitComponent,
];

@NgModule({
  declarations: declarations,
  imports: [SharedModule, SwiperModule],
  exports: declarations,
})
export class CreateModule {}

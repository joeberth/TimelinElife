import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MapsComponent } from './maps/maps.component';
import { HeaderHomeComponent } from './header-home/header-home.component'

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgbCarouselModule,
        NgbDropdownModule,
    ],
    declarations: [HomeComponent, MapsComponent, HeaderHomeComponent]
})
export class HomeModule {}

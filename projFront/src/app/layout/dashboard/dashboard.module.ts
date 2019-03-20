import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
} from './components';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbModule,
        NgbAlertModule,
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
    ]
})
export class DashboardModule {}

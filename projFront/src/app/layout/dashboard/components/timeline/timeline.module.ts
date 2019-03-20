import { NgModule } from '@angular/core';
import { MglTimelineModule } from 'angular-mgl-timeline';

import { NgbCollapseModule, NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TimelineComponent } from './timeline.component';


@NgModule({
  imports:      [ MglTimelineModule,
    NgbCollapseModule,
    NgbModule,
    NgbButtonsModule],
  declarations: [ TimelineComponent ],
  bootstrap:    [ TimelineComponent ]
})
export class TimelineModule { }

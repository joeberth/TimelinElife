import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, HeaderComponent]
})
export class LayoutModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderHomeComponent } from './header-home.component';

const routes: Routes = [
    {
        path: '',
        component: HeaderHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeaderHomeRoutingModule {}

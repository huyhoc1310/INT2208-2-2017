import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OnlineTestComponent } from './onlinetest.component';
import { BaigiangComponent } from './baigiang.component';
import { BaigiangListComponent } from './baigianglist.component';
import { BaigiangtoanComponent } from './baigiangtoan.component';

const routing: Routes = [
    { path: '', component: HomeComponent},
    { path: 'onlinetest', component: OnlineTestComponent},
    { path: 'bglist/:id', component: BaigiangComponent },
    { path: 'baigiang', component: BaigiangListComponent },
    {path: 'baigiangtoan', component: BaigiangtoanComponent}
]
export const appRoutes = RouterModule.forRoot(routing);
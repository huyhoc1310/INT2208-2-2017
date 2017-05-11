import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OnlineTestComponent } from './onlinetest.component';
import { LoginComponent } from "./login.component";
import { BaigiangComponent } from "./baigiang.component";
import { BaigiangListComponent } from "./baigianglist.component";
import { CheckLoginGuard } from "./guards/check-login.guard";

const routing: Routes = [
    { path: '', component: HomeComponent},
    { path: 'onlinetest', component: OnlineTestComponent},
    { path: 'login', component: LoginComponent},
    { path: 'baigiang/:id', component: BaigiangComponent, canActivate:[CheckLoginGuard] },
    { path: 'baigiang', component: BaigiangListComponent, canActivate:[CheckLoginGuard] }
]
export const appRoutes = RouterModule.forRoot(routing);
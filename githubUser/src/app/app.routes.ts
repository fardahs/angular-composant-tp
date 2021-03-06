
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { PATH_HOME, PATH_DETAIL, PATH_DETAIL_FOLLOWERS, PATH_DETAIL_REPOS } from './app.routes.constantes';
import { FollowersComponent } from './followers/followers.component';
import { ReposComponent } from './repos/repos.component';

export const ROUTES: Routes = [ 
    {path: PATH_HOME, component: HomeComponent,},
    {
         path: PATH_DETAIL + '/:user', 
         component: DetailComponent,
         children:[
            {path:PATH_DETAIL_FOLLOWERS , component:FollowersComponent},
            {path:PATH_DETAIL_REPOS, component:ReposComponent}
        ]
    } 
    
];

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { UserComponent }  from './component/user.component';
import { AboutComponent }  from './component/about.component';
// array of an objects
const appRoutes: Routes = [
{
	path:'',
	component:UserComponent
},
{
	path:'about',
	component:AboutComponent
},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
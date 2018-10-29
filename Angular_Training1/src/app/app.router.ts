import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { TemplateComponent } from './layout/template/template.component';
import { AuthGuard } from './auth/auth.guard';
import {ShowPersonDataComponent} from './show-person-data/show-person-data.component';

export const routes:  Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        
    },
    {
        path: '',
        component: TemplateComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

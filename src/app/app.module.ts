import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DeptManageComponent } from './dept-manage.component';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role/role-detail.component';

import { KyoInterceptor } from './interceptor.service';
import { RoleService } from './role/role.service';
// import { HttpInterceptor } from './http-interceptor.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    RoleDetailComponent,
    DashboardComponent,
    DeptManageComponent
  ],
  entryComponents: [
    RoleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KyoInterceptor,
      multi: true,
    },
    RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

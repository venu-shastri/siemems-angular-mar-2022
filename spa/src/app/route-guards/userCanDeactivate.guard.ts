import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

Injectable()
export class UserCanDeactivate implements CanDeactivate<DashboardComponent>{
canDeactivate() {
	return window.confirm('Do you want to continue?');
	}
}

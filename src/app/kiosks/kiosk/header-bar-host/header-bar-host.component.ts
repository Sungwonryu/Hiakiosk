import {
  Component,
  Input,
  OnInit,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  Type
} from '@angular/core';

import { Kiosk } from '../../kiosk.model';
import { HeaderBar } from './header-bar.model';
import { HeaderBarHostService } from './header-bar-host.service';

import { ComponentHostDirective } from '../../../shared/component-host/component-host.directive';
import { ComponentInterface } from '../../../shared/component-host/component.interface';
import { ComponentHost } from '../../../shared/component-host/component-host.model';


@Component({
  selector: 'hk-header-bar-host',
  templateUrl: './header-bar-host.component.html',
  styleUrls: ['./header-bar-host.component.scss']
})
export class HeaderBarHostComponent implements OnInit, AfterContentInit {
  @Input('kiosk') kiosk: Kiosk;
  @ViewChild(ComponentHostDirective) componentHostEl: ComponentHostDirective;
  componentHost: HeaderBar;

  constructor(
    private headerBarHostService: HeaderBarHostService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.componentHost = this.headerBarHostService.getComponentHost(this.kiosk.headerBar.componentId);
  }

  ngAfterContentInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentHost.component);
    let viewContainerRef = this.componentHostEl.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ComponentInterface>componentRef.instance).data = { kiosk: this.kiosk };
  }
}

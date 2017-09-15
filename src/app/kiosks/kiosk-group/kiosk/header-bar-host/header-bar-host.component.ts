import {
  Component,
  Input,
  OnInit,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  Type
} from '@angular/core';

import { Kiosk } from '../../../models/kiosk.model';
import { KioskGroup } from '../../../models/kiosk-group.model';
import { HeaderBarHostService } from './header-bar-host.service';

import { ComponentHostDirective } from '../../../../shared/component-host/component-host.directive';
import { ComponentInterface } from '../../../../shared/component-host/component.interface';
import { ComponentHost } from '../../../../shared/component-host/component-host.model';


@Component({
  selector: 'hk-header-bar-host',
  templateUrl: './header-bar-host.component.html',
  styleUrls: ['./header-bar-host.component.scss']
})
export class HeaderBarHostComponent implements OnInit, AfterContentInit {
  @Input('kiosk') kiosk: Kiosk;
  @Input('kioskGroup') kioskGroup: KioskGroup;
  @ViewChild(ComponentHostDirective) componentHostEl: ComponentHostDirective;
  componentHost: ComponentHost;

  constructor(
    private headerBarHostService: HeaderBarHostService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.componentHost = this.headerBarHostService.getComponentHost(this.kiosk.kioskConfig.headerBar.componentId);
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

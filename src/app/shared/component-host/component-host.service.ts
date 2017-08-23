import { Injectable } from '@angular/core';
import { ComponentHost } from './component-host.model';

@Injectable()
export class ComponentHostService {
  settingsList: any[] = [];
  componentList: any[] = [];

  constructor() {
    this.setComponentList();
  }

  setComponentList() {
    // this.componentList = this.settingsList.map((settings) => {
    //   return new ComponentHost(setings);
    // });
  }

  getComponentHost(componentId: number) {
    let matchedComponentHost = this.componentList.find((componentHost) => {
      return componentHost.componentId === componentId;
    });

    if (matchedComponentHost) {
      return matchedComponentHost;
    }
  }
}

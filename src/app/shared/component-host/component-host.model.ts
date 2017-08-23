// import { Type } from '@angular/core';
//
// export class ComponentHost {
//   public componentId: number;
//   public componentName: string | null | undefined;
//   public component: Type<any> | null | undefined;
//   public data: any;
//
//   constructor({ componentId, componentName, component, data }:
//     {
//       componentId: number,
//       componentName?: string,
//       component?: Type<any>,
//       data?: any
//     }) {
//
//     this.set({ componentId, componentName, component, data });
//   }
//
//   set({ componentId, componentName, component, data }:
//     {
//       componentId?: number | null | undefined,
//       componentName?: string | null | undefined,
//       component?: Type<any> | null | undefined,
//       data?: any | null | undefined
//     }) {
//
//     if (componentId !== null) this.componentId = componentId;
//     if (componentName !== null) this.componentName = componentName;
//     if (component !== null) this.component = component;
//     if (data !== null) this.data = data;
//   }
// }
import { Type } from '@angular/core';

export class ComponentHost {
  public componentId: number;
  public componentName: string | null | undefined;
  public component: Type<any> | null | undefined;
  public data: any;

  constructor({ componentId, componentName, component, data }:
    {
      componentId?: number,
      componentName?: string,
      component?: Type<any>,
      data?: any
    }) {

    this.set({ componentId, componentName, component, data });
  }

  set({ componentId, componentName, component, data }:
    {
      componentId?: number,
      componentName?: string,
      component?: Type<any>,
      data?: any
    }) {

    if (componentId !== null) this.componentId = componentId;
    if (componentName !== null) this.componentName = componentName;
    if (component !== null) this.component = component;
    if (data !== null) this.data = data;
  }
}

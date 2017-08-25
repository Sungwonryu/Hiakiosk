import { KioskGroup } from './kiosk-group.model';

/**
 *  param {Number} id
 *  param {String} name
 *  param {Object} data
 *  param {Object} kioskGroup
 *  param {Object} headerBar
 *  param {Object} topBar
 *  param {Object} bottomBar
 *  param {Object} appBar

 *
 *  id - unique integer ID for kiosk which starting from 1
 *  name - unique name for kiosk (e.g. 'per11', 'nwill')
 *  location - kiosk location (e.g. 'Pier11 / Wall Street', 'North Willamsburg')
 *  headerBar
 *  topBar
 *  bottomBar
 *  appBar
 */
export class Kiosk {
  public id: number;
  public name?: string;
  public kioskGroup?: any;
  public headerBar?: any;
  public topBar?: any;
  public bottomBar?: any;
  public appBar?: any;
  public data?: any;

  constructor({ id, name, kioskGroup, headerBar, topBar, bottomBar, appBar, data = {} }:
    {
      id: number,
      name?: string,
      kioskGroup?: any;
      headerBar?: any,
      topBar?: any,
      bottomBar?: any,
      appBar?: any,
      data?: any
    }) {

    this.set({ id, name, kioskGroup, headerBar, topBar, bottomBar, appBar, data })
  }

  set({ id, name, kioskGroup, headerBar, topBar, bottomBar, appBar, data }: {
    id?: number,
    name?: string,
    kioskGroup?: any,
    headerBar?: any,
    topBar?: any,
    bottomBar?: any,
    appBar?: any,
    data?: any
  }) {

    if (id != null) this.id = id;
    if (name != null) this.name = name;
    if (kioskGroup != null) this.kioskGroup = kioskGroup;
    if (headerBar != null) this.headerBar = headerBar;
    if (topBar != null) this.topBar = topBar;
    if (bottomBar != null) this.bottomBar = bottomBar;
    if (appBar != null) this.appBar = appBar;
    if (data != null) this.data = data;
  }
}

// import { KioskGroup } from './kiosk-group.model';

/**
 *  param {Number} id
 *  param {String} name
 *  param {Object} data
 *  param {Object} headerBar
 *  param {Object} topBar
 *  param {Object} bottomBar
 *  param {Object} appBar

 *
 *  id - unique integer ID for kioskConfig which starting from 1
 *  name - unique name for kioskConfig (e.g. 'nycferry-per11', 'nycferry-nwill')
 *  headerBar
 *  topBar
 *  bottomBar
 *  appBar
 *  data
 */
export class KioskConfig {
  public id: number;
  public name?: string;
  public headerBar?: any = null;
  public topBar?: any = null;
  public bottomBar?: any = null;
  public appBar?: any = null;
  public data?: any = {};

  constructor({ id, name, headerBar, topBar, bottomBar, appBar, data = {} }:
    {
      id: number,
      name?: string,
      headerBar?: any,
      topBar?: any,
      bottomBar?: any,
      appBar?: any,
      data?: any
    }) {

    this.set({ id, name, headerBar, topBar, bottomBar, appBar, data })
  }

  set({ id, name, headerBar, topBar, bottomBar, appBar, data }: {
    id?: number,
    name?: string,
    headerBar?: any,
    topBar?: any,
    bottomBar?: any,
    appBar?: any,
    data?: any
  }) {

    if (id != null) this.id = id;
    if (name != null) this.name = name;
    if (headerBar != null) this.headerBar = headerBar;
    if (topBar != null) this.topBar = topBar;
    if (bottomBar != null) this.bottomBar = bottomBar;
    if (appBar != null) this.appBar = appBar;
    if (data != null) this.data = data;
  }
}

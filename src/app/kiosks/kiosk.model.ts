/**
 *  param {Number} id
 *  param {String} name
 *  param {String} location
 *  param {Number} headerId
 *  param {String} headerName
 *
 *  id - unique integer ID for kiosk which starting from 1
 *  name - unique name for kiosk (e.g. 'per11', 'nwill')
 *  location - kiosk location (e.g. 'Pier11 / Wall Street', 'North Willamsburg')
 *  headerBarId - unique integer ID for headerBar which starting from 1
 *  headerBarName - unique name for headerBar (e.g. 'nycferry-header-bar', 'wework-header-bar')
 *  topBarId - unique integer ID for topBar which starting from 1
 *  topBarName - unique name for topBar (e.g. 'ferry-countdown')
 *  bottomBarId - unique integer ID for bottomBar which starting from 1
 *  bottomBarName - unique name for bottomBar
 *  appBarId - unique integer ID for appBar which starting from 1
 *  appBarName - unique name for appBar
 */
export class Kiosk {
  public id: number;
  public name: string;
  public location: string;
  public headerBarId: number | null | undefined;
  public headerBarName: string | null | undefined;
  public topBarId: number | null | undefined;
  public topBarName: string | null | undefined;
  public bottomBarId: number | null | undefined;
  public bottomBarName: string | null | undefined;
  public appBarId: number | null | undefined;
  public appBarName: string | null | undefined;

  constructor({id, name, location, headerBarId, headerBarName, topBarId, topBarName, bottomBarId, bottomBarName, appBarId, appBarName}:
              {id: number,
               name: string,
               location: string,
               headerBarId: number | null | undefined,
               headerBarName: string | null | undefined,
               topBarId: number | null | undefined,
               topBarName: string | null | undefined,
               bottomBarId: number | null | undefined,
               bottomBarName: string | null | undefined,
               appBarId: number | null | undefined,
               appBarName: string | null | undefined}) {

    this.id = id;
    this.name = name;
    this.location = location;
    this.headerBarId = headerBarId;
    this.headerBarName = headerBarName;
    this.topBarId = topBarId;
    this.topBarName = topBarName;
    this.bottomBarId = bottomBarId;
    this.bottomBarName = bottomBarName;
    this.appBarId = appBarId;
    this.appBarName = appBarName;
  }
}

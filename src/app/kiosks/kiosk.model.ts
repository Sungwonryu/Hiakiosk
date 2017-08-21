/**
 *  param {Number} id
 *  param {String} name
 *  param {String} location
 *  param {Number} headerId
 *  param {String} headerName
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
  public name: string;
  public location: string;
  public headerBar: any;
  public topBar: any;
  public bottomBar: any;
  public appBar: any;

  constructor({id, name, location, headerBar, topBar, bottomBar, appBar}:
              {id: number,
               name: string,
               location: string,
               headerBar: any,
               topBar: any,
               bottomBar: any,
               appBar: any}) {

    this.id = id;
    this.name = name;
    this.location = location;
    this.headerBar = headerBar;
    this.topBar = topBar;
    this.bottomBar = bottomBar;
    this.appBar = appBar;
  }
}

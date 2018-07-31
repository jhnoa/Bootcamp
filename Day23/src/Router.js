// @flow

type ReqRes = {
  request: http$IncomingMessage;
  response: http$ServerResponse;
};

type RouteHandler = (ReqRes) => void;

type Route = {
  start: string;
  par: number;
  handler: RouteHandler;
};

type Routes = Array<Route>;

export default class Router {
  routes: Routes = [];
  addRoute(pattern: string, handler: RouteHandler): void {
    let start = '';
    let par = 0;
    if (pattern.includes('/:')) {
      start = pattern.slice(0, pattern.indexOf('/:') + 1);
      let parameters = pattern.slice(pattern.indexOf('/:') + 2);
      par = parameters.split('/:').length;
    } else {
      start = pattern;
    }
    let route: Route = {
      start,
      par,
      handler,
    };
    this.routes.push(route);
  }
  handleRequest(path: string, context: ReqRes): void {
    for (let route of this.routes) {
      let {start, par, handler} = route;
      if (path.startsWith(start)) {
        let parameters = path.replace(start, '').split('/');
        if (parameters[0] === '') {
          parameters = [];
        }
        if (parameters.length === par) {
          handler(context, ...parameters);
          return;
        }
      }
    }
  }
}

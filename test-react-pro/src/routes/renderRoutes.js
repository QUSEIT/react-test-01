import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
function renderRoutes (routes, auth, extraProps = {}, switchProps = {}) {

  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {

            if (route.auths && !route.auths.includes(auth)) {
              // 进行拦截
            }
            // if (global.source.token && global.source.cancel) global.source.cancel('取消请求')
            // changeGlobal('source', getCancelToken())
            // changeGlobal('timestamp', new Date().getTime())

            return route.render ? (
              route.render({ ...props, ...extraProps, route: route })
            ) : (
              <route.component {...props} {...extraProps} route={route} />
            )
          }
          }
        />
      ))}
      <Redirect to="/404" />
    </Switch>
  ) : null
}

export default renderRoutes

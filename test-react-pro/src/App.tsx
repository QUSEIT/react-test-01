import React, { Suspense} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router'
import renderRoutes from './routes/renderRoutes'
import routes from './routes/index'

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <Switch>
    //   {routes.map((route, i) => (
    //     <Route
    //       key={route.key || i}
    //       path={route.path}
    //       exact={route.exact}
    //       strict={route.strict}
    //       render={props => {

    //         if (route.auths && !route.auths.includes(auth)) {
    //           // 进行拦截
    //         }
    //         // if (global.source.token && global.source.cancel) global.source.cancel('取消请求')
    //         // changeGlobal('source', getCancelToken())
    //         // changeGlobal('timestamp', new Date().getTime())

    //         return route.render ? (
    //           route.render({ ...props, ...extraProps, route: route })
    //         ) : (
    //           <route.component {...props} {...extraProps} route={route} />
    //         )
    //       }
    //       }
    //     />
    //   ))}
    //   </Switch>
    // </div>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

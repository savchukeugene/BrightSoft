import React from "react";
import {Route} from "react-router-dom";

export const routeGenerator = (...routes: string[]) => {
    return routes.join('')
}

interface IRouteConfig {
    path: string;
    element: React.JSX.Element;
    children: IRouteConfig;
}

export const routesTagRender = (routeConfig: IRouteConfig): React.JSX.Element => {
    return (
        routeConfig.children ? (
            <Route
                path={routeConfig.path}
                element={routeConfig.element}
            >
                routesTagRender(routeConfig.children)
            </Route>
        ) : (
            <Route
                path={routeConfig.path}
                element={routeConfig.element}
            >

            </Route>
        )
    )
    }
import React, { PropsWithChildren, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/layout";

type Route = {
  path: string;
  Element:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.LazyExoticComponent<() => JSX.Element>;
};

const pages = import.meta.glob("../pages/**/*.tsx"); // alias'sız kullan

const routes: Route[] = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: React.lazy(() => import(`../pages/${fileName}`)),
  });
}

routes.push({
  path: "*",
  Element: React.lazy(() => import("../pages/404")),
});

const AppRouterProvider = ({ children }: PropsWithChildren) => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, Element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Layout>
                <Element />
              </Layout>
            </Suspense>
          }
        />
      ))}
    </Routes>
    {children}
  </BrowserRouter>
);

export default AppRouterProvider;

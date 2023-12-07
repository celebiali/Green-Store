import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import '../src/assets/main.scss'
import {Provider} from "react-redux";
import stores from "./stores";
import routes from "../src/routes/index.tsx"
import "./utils/language.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={stores}>
          <RouterProvider router={routes} />
      </Provider>
  </React.StrictMode>,
)

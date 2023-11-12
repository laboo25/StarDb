import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Error404 from './Error404.jsx';
import AbellaDanger from './components/Stars/AbellaDanger.jsx';
import AlexaGrace from './components/Stars/AlexaGrace.jsx';
import BellaRolland from './components/Stars/BellaRolland.jsx';
import MilaAzul from './components/Stars/MilaAzul.jsx';
import ToriBlack from './components/Stars/ToriBlack.jsx';
import UmaJolie from './components/Stars/UmaJolie.jsx';
import TiffanyTatum from './components/Stars/TiffanyTatum.jsx';




    
    

    
    //////////////////////////////////////////////
Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "flipX",
        "flipY",
      ],
      right: ["slideshow", "fullscreen", "thumbs", "close"],
    },
  },
}); 
//  end
const router = createBrowserRouter([
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AbellaDanger",
    element: <AbellaDanger />,
    
  },
  {
    path: "/alexaGrace",
    element: <AlexaGrace/>,
  },
  {
    path: "/bellaRolland",
    element: <BellaRolland />,
  },
  {
    path: "/milaAzul",
    element: <MilaAzul />,
  },
  {
    path: "/tiffanyTatum",
    element: <TiffanyTatum />,
  },
  {
    path: "/toriBlack",
    element: <ToriBlack />,
  },
  {
    path: "/umaJolie",
    element: <UmaJolie />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)

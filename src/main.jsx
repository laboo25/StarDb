import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import { Provider } from "react-redux";
// import store from "./redux/store";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import AbellaDanger from './components/Stars/A/AbellaDanger.jsx';
import AlexaGrace from './components/Stars/A/AlexaGrace.jsx';
import BellaRolland from './components/Stars/B/BellaRolland.jsx';
import MilaAzul from './components/Stars/M/MilaAzul.jsx';
import ToriBlack from './components/Stars/T/ToriBlack.jsx';
import UmaJolie from './components/Stars/U/UmaJolie.jsx';
import TiffanyTatum from './components/Stars/T/TiffanyTatum.jsx';
import Error404 from './Error404.jsx';

import ChristyWhite from './components/Stars/C/ChristyWhite.jsx';
// import JessieSaint from './components/Stars/J/JessieSaint.jsx';
import JiaLissa from './components/Stars/J/JiaLissa.jsx';
import LenaAnderson from './components/Stars/L/LenaAnderson.jsx'
import LenaIsReadyToGo from './components/Stars/L/LenaAnderson/LenaIsReadyToGo.jsx';
import LenaEnjoysWineAndGoodTimes from './components/Stars/L/LenaAnderson/LenaEnjoysWineAndGoodTimes.jsx';
import Home from './components/Navbar/Home.jsx';
import LiyaSilver from './components/Stars/L/LiyaSilver.jsx';




    
    

    
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
    exact: true
  },
  {
    path: "AbellaDanger",
    element: <AbellaDanger />,
    
  },
  {
    path: "alexaGrace",
    element: <AlexaGrace />,
  },
  {
    path: "/bellaRolland",
    element: <BellaRolland />,
  },
  {
    path: "/christyWhite",
    element: <ChristyWhite />,
  },
  // {
  //   path: "/jessieSaint",
  //   element: <JessieSaint />,
  // },
  {
    path: "/jiaLissa",
    element: <JiaLissa />,
  },
  {
    path: "/lenaAnderson",
    element: <LenaAnderson />,
  },
      {
        path: "/lenaIsReadyToGo",
        element: <LenaIsReadyToGo />,
      },
      {
        path: "/lenaEnjoysWineAndGoodTimes",
        element: <LenaEnjoysWineAndGoodTimes />,
      },
  {
    path: "/liyaSilver",
    element: <LiyaSilver />,
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
    {/* <Provider store={store}></Provider> */}
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)

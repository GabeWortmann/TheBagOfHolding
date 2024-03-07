import App from "./App"
import MainPage from "./components/home/MainPage"
import CampaignsPage from './components/campaigns/CampaignsPage'
import CharactersPage from './components/characters/CharactersPage'

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },  
      { path: "/Campaigns", element: <CampaignsPage /> },
      { path: "/Characters", element: <CharactersPage /> },
    ],
  },
];

export default routes;
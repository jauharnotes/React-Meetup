// import { Route, Switch } from "react-router-dom";

// import Effect from "./hook/Effect";
import { PreviousState } from "./hook/PreviousState";
// import State from "./hook/State";

// import AllMeetupsPage from "./pages/AllMeetups";
// import NewMeetupPage from "./pages/NewMeetup";
// import FavoritePage from "./pages/Favorites";
// import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      {/* <State /> */}
      {/* <Effect /> */}
      <PreviousState />
    </>
    // <Layout>
    //   {/* <MainNavigation /> */}
    //   <Switch>
    //     <Route path="/" exact>
    //       <AllMeetupsPage />
    //     </Route>
    //     <Route path="/new-meetup">
    //       <NewMeetupPage />
    //     </Route>
    //     <Route path="/favorite">
    //       <FavoritePage />
    //     </Route>
    //   </Switch>
    // </Layout>
  );
}

export default App;

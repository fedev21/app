import { useState } from "react";

import Cart from "./Cart";
import Home from "./Home";
import ItemListContainer from "./ItemListContainer";

import Layout from "./Layout";
import '../../App.scss'

const App = () => {

  const [currentTab, setCurrentTab] = useState();

  const Current = {
    'cart': Cart,
    'item-list-container': ItemListContainer
  }[currentTab] || Home

  return (
    <Layout
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
    >
      <Current />
    </Layout>
  )

}

export default App;
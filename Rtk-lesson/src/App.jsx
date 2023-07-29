import React from 'react'
import Parents from './component/Parents'
// import Products from './component/Products'
import Text from './component/Text'
import Products from "./component/Products";
import AddtoCard from "./component/AddtoCard";
import Nav from "./component/Nav";
import SearchPage from './component/SearchPage';
import { Route,Routes } from 'react-router-dom';
import RouteGuard from './component/RouteGuard';
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/AddtoCard" element={<AddtoCard />} />
        <Route
          path="/Search"
          element={
            <RouteGuard>
              <SearchPage />
            </RouteGuard>
          }
        />
      </Routes>
    </div>
  );
}

export default App

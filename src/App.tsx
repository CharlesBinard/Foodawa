import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './components/Layouts/DefaultLayout';
import NotFound from './views/NotFound';
import Recipes from './views/Products';
import CreateRecipe from './views/Products/Create';
import Product from './views/Products/Product';
import UpdateRecipe from './views/Products/Update';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Recipes />} />
          <Route path='/products' element={<Recipes />} />
          <Route path='/products/create' element={<CreateRecipe />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/products/:productId/update' element={<UpdateRecipe />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

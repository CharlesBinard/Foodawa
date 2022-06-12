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
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<Recipes />} />
          <Route path='/products' element={<Recipes />} />
          <Route path='/products/create' element={<CreateRecipe />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/products/:productId/update' element={<UpdateRecipe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;

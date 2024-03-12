import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import ProductItemDetails from './components/ProductItemDetails'

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
      </Switch>
    </BrowserRouter>
)


export default App
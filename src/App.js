import { Navbar } from './components'
import { Article, Articles, Home, Mi, Mts, Ppdb, Tk } from './containers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/reducers'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/artikel-berita' element={<Articles />}></Route>
          <Route path='/artikel-berita/:artikle_id' element={<Article />}></Route>
          <Route path='/tk' element={<Tk />}></Route>
          <Route path='/mi' element={<Mi />}></Route>
          <Route path='/mts' element={<Mts />}></Route>
          <Route path='/ppdb' element={<Ppdb />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

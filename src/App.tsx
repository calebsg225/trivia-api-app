import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TriviaGenerator from './pages/TriviaGenerator/TriviaGenerator';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<TriviaGenerator />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;

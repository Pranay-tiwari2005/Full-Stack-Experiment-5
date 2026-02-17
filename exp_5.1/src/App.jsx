import { useState, lazy, Suspense } from 'react';
import './App.css';

const Dashboard = lazy(() => import("./components/dashboard"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
import './App.css';
import OrderComponent from './order/OrderComponent';
// import { useState, useEffect } from 'react';
// import { PageLoader } from './layout/utils/PageLoader';

// const SetTime = (setLoading) => {
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false)
//     }, 2000);
//   });
// }

function App() {

  // const [loading, setLoading] = useState(true);
  // SetTime(setLoading);

  return (
    <div className="App">
      {/* <PageLoader loading={loading} /> */}
      <header>
        <OrderComponent />
      </header>
    </div>
  );
}

export default App;

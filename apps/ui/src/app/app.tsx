import { useEffect } from 'react';
import NxWelcome from '@ui/app/nx-welcome';

export function App() {
  useEffect(() => {
    const loadData = async () => {
      const result = await fetch('http://localhost:3000/api', {
        method: 'GET',
      })
        .then((data) => data.json())
        .catch((error) => console.error(error));
      console.log(result);
    };
    loadData();
  }, []);
  return (
    <div>
      <NxWelcome title="ui" />
    </div>
  );
}

export default App;

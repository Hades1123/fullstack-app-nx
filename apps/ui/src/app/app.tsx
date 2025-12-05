import { useEffect } from 'react';
import NxWelcome from '@ui/app/nx-welcome';
import { UserResponse } from '@fullstack-app/datatypes';

export function App() {
  useEffect(() => {
    const loadData = async () => {
      const result = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
        method: 'GET',
      })
        .then((data) => data.json())
        .catch((error) => console.error(error));
      const user: UserResponse = result.message;
      console.log('[INFO] ', user.name, user.age);
    };
    loadData();
  }, []);
  return (
    <div>
      <h1 className="text-red-400">Hello world</h1>
      <NxWelcome title="ui" />
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Main from './Main';

interface IModalContext {
    alert: boolean;
}

const AlertContext = React.createContext<IModalContext>({
    alert: false
});

function App() {
    const [alert, setAlert] = useState(false);

    return (
          <AlertContext.Provider value={{alert}}>
              <div>
                <Main/>
              </div>
          </AlertContext.Provider>
    );
}

export default App;

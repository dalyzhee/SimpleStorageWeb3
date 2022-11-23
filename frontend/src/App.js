import { useState, useEffect } from 'react';
import getBlockchain from './ethereum';
function App() {
  const [number, setNumber] = useState(0);
  const[ simpleStorage, setSimpleStorage ] = useState(undefined);

  useEffect(() =>{
    const init = async () =>{
      const {signerAddress, simpleStorage} = await getBlockchain();
      const num = await simpleStorage.get();
      setNumber(num.toNumber());
      setSimpleStorage(simpleStorage);
    };
    init();
  }, []);
  if(typeof simpleStorage === 'undefined'){
    return 'Loading ....';
  }
  const set = async (e) =>{
    e.preventDefault();
    const num = e.target.elements[0].value;
    await simpleStorage.set(num);
  }
  return (
    <div className="container">
      <h1 className="text-center">SimpleStorage</h1>
      <p className='text-center'>{ number }</p>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
        <div className="card-body">
              <h5 className="card-title">Set Number</h5>
              <form className="form-inline" onSubmit={e => set(e)}>
                <input
                  id='val' 
                  type="text" 
                  className="form-control mb-2 mr-sm-2" 
                  placeholder="enter number"
                />
                <button 
                  type="submit" 
                  className="btn btn-primary mb-2"
                >
                  Submit
                </button>
              </form>
            </div>
        </div>
        <div className='col-sm-4'></div>
      </div>
      
    </div>
  );
}

export default App;

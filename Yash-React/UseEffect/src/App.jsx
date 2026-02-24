import React from 'react'

import EffectBasic from './components/EffecBasicDemo'
import FirstMountExample from './components/FirstMountDemo'
import UnmountExample from './components/Cleanup'
import UpdateExample from './components/DidUpdateDemo'
import CounterWithLifecycle from './components/Example'

function App(){
  return (
    <div>
      {/* <EffectBasic/>
      <hr /> */}
      {/* <FirstMountExample /> */}
      <hr />
      {/* <UpdateExample />   */}
      <hr />
      {/* <UnmountExample />
       */}
       <hr />
       <CounterWithLifecycle />
    </div>
  ) 
}

export default App;
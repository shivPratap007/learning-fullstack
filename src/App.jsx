import React from 'react'

const App = () => {
  return (
    <div>
      <WrapperComponet>
        <InnerComponent/>
      </WrapperComponet>
    </div>
  )
}


function WrapperComponet({children}){
  return(
    <>
    <div className='border-2'>
      {children}
    </div>
    </>
  )
}

function InnerComponent(){
  return(
    <>
    <div>I am inner component</div>
    </>
  )
}
export default App
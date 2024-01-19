import React, { useEffect, useState } from "react";

const App=()=>{
  const[data, setData]= useState(null)
  const[loading, setLoading]= useState(true)

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((response)=>response.json())
    .then((products)=>setData(products))
    .catch((error)=>console.log(error))
  }, [])
  return(
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App;
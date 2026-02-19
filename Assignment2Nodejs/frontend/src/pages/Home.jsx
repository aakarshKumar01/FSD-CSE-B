import React from 'react'

const Home = () => {
    const [data, setData] = React.useState("")

    const hadlefreemem = () => { 
        fetch("http://localhost:7000/free")   
        .then(res => res.json())
        .then(result => setData(result.freeMem))    
    }

   

    const handleTotalmem = () => { 
        fetch("http://localhost:7000/total")   
        .then(res => res.json())
        .then(result => setData(result.totalMem))    
    }

    const handleCPUarc = () => { 
        fetch("http://localhost:7000/cpu")   
        .then(res => res.json())
        .then(result => setData(result.cpuArch))    
    }

   

    const handleUserInfo = () => { 
        fetch("http://localhost:7000/user")   
        .then(res => res.json())
        .then(result => setData(JSON.stringify(result.userInfo)))    
    }


  return (
    <div>
        <h1>Work with os</h1>
        {data ? <p>{data}</p> : <p>No data available</p>}
        <button onClick={hadlefreemem}>Free memory</button>
        <button onClick={handleTotalmem}>Total memory</button>
        <button onClick={handleCPUarc}>CPU arc</button>
        <button onClick={handleUserInfo}>User intfo</button>
    </div>
  )
}

export default Home

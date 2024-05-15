import React, { useEffect, useState } from 'react'

function Data() {

    const [data,setData] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/students').then((result) => {
            result.json().then((res) => {
                setData(res)
            })
        })
        
    })
    return (
        <>
            
            <table border={2} style={{height:'500px',width:'500px',fontFamily:'sans-serif',marginLeft:'500px'}}>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Addres</th>

                </tr>
                {
                    data.map((val) =>
                        <tr>
                            <th>{val.id }</th>
                            <th>{val.name}</th>
                            <th>{val.address}</th>

                     </tr>
                    )
                }
            </table>
        </>

  )
}

export default Data



useEffect(() => {
    fetch("").then((result) => {
        result.json().then((res) => {
            se
        })
    })
})


fetch('').then((result) => {
    result.json().then((res) => {
        setData(res)
    })
})





fetch('').then((resul) => {
    resul.json().then((res) => {
        setData(res)
    })
})



useEffect(() => {
    fetch('').then((result) => {
        result.json().then((res) => {
            setData(res)
        })
    })
})




useEffect(() => {
    fetch('').then((resul) => {
        resul.json().then((res) => {
            setData(res)
        })
    })
})
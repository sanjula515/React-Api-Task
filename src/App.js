import React,{useState,useEffect} from 'react';
import './index.css';
const App=(props)=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((data)=>setData(data));
  },[]);
  return(
       <div>
        <h1 className="heading">api details</h1>
    <div className="design">
      <ul>
        {data.map((item)=>{
          return <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <h4>Address</h4>
            <p>Street: {item.address.street}</p>
            <p>Suite: {item.address.suite}</p>
            <p>City: {item.address.city}</p>
            <p>Zipcode: {item.address.zipcode} </p>
            <h4>Geo</h4>
            <p>Lat: {item.address.geo.lat} </p>
            <p>Lng: {item.address.geo.lng}</p>
            <p>Phone: {item.phone}</p>
            <p>Website: {item.website}</p>
            <h4>Company</h4>
            <p>Name: {item.company.name}</p>
            <p>catchPhrase: {item.company.catchPhrase}</p>
            <p>Bs: {item.company.bs}</p>

            </li>
        })}
</ul> 
</div>
</div>
)
}
export default App

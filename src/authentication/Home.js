import React, { useEffect, useState } from "react";
import db from "../Firebase";
import "firebase/auth";
import "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios"

const Home = () => {
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [pincode, setPincode] = useState("");
    const [info, setInfo] = useState({});
    const { currentUser } = useAuth();

    useEffect(()=> {
       (async () => {
        const res = await axios.get("https://twf-auth-default-rtdb.firebaseio.com/info.json");
            for(let key in res.data) {
                const { email } = res.data[key];
               if(email === currentUser.email) {
                   setInfo(res.data[key]);
               }
            }
       })();
    }, [])

    console.log("info", info)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(address, contact, pincode);
        console.log(currentUser)
        const data = {
            email: currentUser.email,
            address,
            contact,
            pincode
        }
        axios.post("https://twf-auth-default-rtdb.firebaseio.com/info.json", data).then( response => {
            console.log(response)
        })
    }

    return (
        <div className="container-lg">
            Fill following information
           {info?.email ? (
               <div>
                   <div>email: {info.email}</div>
                   <div>address: {info.address}</div>
                   <div>contact: {info.contact}</div>
                   <div>pincode: {info.pincode}</div>
               </div>
           ): (
            <div className="container">
            <form onSubmit={handleSubmit}>
                 <div className="content">
                 Address:  <input type="text" name="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
                 </div>
                 <div>
                 Contact: <input type="text" name="contact" placeholder="Contact" onChange={(e) => setContact(e.target.value)}/>
                 </div>
                 <div>
                 Pincode: <input type="text" name="pincode" placeholder="pincode" onChange={(e) => setPincode(e.target.value)}/>
                 </div>
                 <button type="submit">Submit</button>
             </form>
            </div>
           )}
        </div>
    )
}

export default Home;
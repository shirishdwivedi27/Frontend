import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import myImage from "./temp.png";
import { useNavigate } from "react-router-dom";


const QRPage = () => {
  const navigate = useNavigate();
  const bk= async()=>{
    navigate('/dashboard');
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <h1 className="text-xl font-bold mb-4">Scan to Pay</h1>
    <img src={myImage} alt="Payment QR Code" style={{ width: "350px", height: "550px" }} />
    <button onClick={bk} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Back</button>
</div>


);
  };
  export default QRPage;
"use client"
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
	useEffect(() => {
	  Crisp.configure("eeb59e30-2f3d-453e-891d-72b9538f4806");
	});
  
	return null;
  }
  
export default CrispChat;
import NavbarTop from "./NavbarTop";
import ProfileUser from "./ProfileUser";
import MyFooter from "./MyFooter";
import React from "react";
import { getOtherProfile } from "../redux/actions/actionType";
import { useEffect, useSelector } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProfileViewUser = () => {
  
  return (
    <>
    <NavbarTop/>
    
    <ProfileUser/>
    
    <MyFooter/>
    </>
  )
}
 
export default ProfileViewUser;
import React from "react";
import { Outlet } from "react-router-dom";
import UserLayout from "../UserLayout/UserLayout";

const UserProfile = () => {
  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};

export default UserProfile;

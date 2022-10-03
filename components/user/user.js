import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>-------------------------------------</p>
    </div>
  );
};

export default User;

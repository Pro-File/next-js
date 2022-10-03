import React from "react";
import User from "../../components/user/user";

const UsersList = ({ users }) => {
  return (
    <div>
      <h1>Users Data</h1>
      {users &&
        users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
    </div>
  );
};

export default UsersList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}

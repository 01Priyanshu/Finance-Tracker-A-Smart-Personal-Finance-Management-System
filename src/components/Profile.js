import { memo } from "react";

const Profile = memo(({ user }) => {
  return <div>{user ? `Hello, ${user.name}` : "Please Log In"}</div>;
});

export default Profile;

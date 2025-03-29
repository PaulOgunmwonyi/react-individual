import User from "./User"; // Import the User component

type UserType = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

type UsersProps = {
  users: UserType[];
};

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="w-auto max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} /> 
        ))}
      </ul>
    </div>
  );
};

export default Users;

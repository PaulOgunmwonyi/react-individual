"use client";
import { useState } from 'react';
import Users from './components/Users';
import Signup from './components/Signup'; // Adjust path as needed

type User = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

const USERS_INIT: User[] = [
  {
    id: 1,
    name: 'Buzz Lightyear',
    username: 'blightyear',
    email: 'buzz.lightyear@gmail.com',
    password: 'password',
    imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/354028274_877327910424573_1574551018727772204_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=amJiy1jib_YQ7kNvgE2Fvxs&_nc_oc=AdktF17rU86JZ3gE-t1e4eZW8VOGwFTCs0iQW8Xi3YLjC1MJeI8Boh4juZOuRtWOJpGOPkoHAn0unyVLI_hpe3_1&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=YAwMFA1iMxE-zRih_K6-YA&oh=00_AYECgQCKcjEFNtsuhG-GH_qn4NeRvmeHvfdAJPkbqkQRjQ&oe=67EE190A',
  },
];

export default function Home() {
  const [users, setUsers] = useState<User[]>(USERS_INIT);

  const handleSignup = (newUser: Omit<User, 'id'>) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...newUser }, // Auto-generate ID
    ]);
  };

  return (
    <div>    
      <div className="flex flex-col items-center justify-center p-2 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <Users users={users}/>
      </div>
      <Signup onSignup={handleSignup} />
    </div>
  );
}

"use client";
import Card from './Card'; 
import Button from './Button';
import styles from './Signup.module.css'; 
import { useState } from 'react';

type SignupProps = {
  onSignup: (user: { name: string; username: string; email: string; password: string; imageUrl: string }) => void;
};

export default function Signup({ onSignup }: SignupProps) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required!");
      return;
    }

    setError('');

    onSignup({ name, username, email, password, imageUrl });

    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setImageUrl('');
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
        <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="font-bold mb-1">Name</label>
          <input className="p-2 border rounded-md mb-3" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          
          <label className="font-bold mb-1">Username</label>
          <input className="p-2 border rounded-md mb-3" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
          
          <label className="font-bold mb-1">Email</label>
          <input className="p-2 border rounded-md mb-3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          
          <label className="font-bold mb-1">Password</label>
          <input className="p-2 border rounded-md mb-3" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          
          <label className="font-bold mb-1">Image Link</label>
          <input className="p-2 border rounded-md mb-3" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter image URL" />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </div>
  );
}

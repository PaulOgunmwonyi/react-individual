"use client";
import Card from './Card'; 
import Button from './Button';
import styles from './Signup.module.css'; 


export default function Signup() {
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-3">
      <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
       <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
        <form>
         <label htmlFor="name">Name</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <label htmlFor="username">Username</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <label htmlFor="email">Email</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <label htmlFor="imageLink">Image Link</label>
          <input className="border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="imageLink"
            type="url"
            placeholder="Enter image URL"
          />
  
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
      </div>
    );
  }
  
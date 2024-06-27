"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const INPUT_CLASS =
  "w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

const Button = ({ text, color, onClick, style, icon }) => {
  return (
    <button
      type="button"
      style={style}
      className={`w-full bg-${color} text-white p-3 rounded-lg mb-4 flex items-center justify-center`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="Icon" className="mr-2" />}
      {text}
    </button>
  );
};

const FormInput = ({ type, id, placeholder, iconSrc, labelText }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-zinc-600 mb-2">
        {labelText}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          className={INPUT_CLASS}
          placeholder={placeholder}
        />
        <span className="absolute inset-y-0 right-3 flex items-center">
          <img src={iconSrc} alt={`${labelText} Icon`} />
        </span>
      </div>
    </div>
  );
};

const ReactComponent = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  console.log(providers);
  return (
    <div className="flex flex-col md:flex-row bg-zinc-100 p-6 rounded-lg shadow-lg mt-20">
      <div className="flex-1 p-6 text-black-500">
        <h1 className="text-3xl font-bold mb-4">Techluminate Academy</h1>
        <p className="text-zinc-600 mb-6">Start your coding Journey Today</p>
        <img
          src="https://placehold.co/400x300"
          alt="Illustration"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">START FOR FREE</h2>
          <select className="text-zinc-600 bg-transparent">
            <option>English (USA)</option>
          </select>
        </div>
        <h2 className="text-2xl font-bold mb-2">Sign up to Voobie</h2>
        <p className="text-zinc-600 mb-4">
          Already a member?{" "}
          <a href="#" className="text-blue-500">
            Log In
          </a>
        </p>
        <form>
          <FormInput
            type="email"
            id="email"
            placeholder="hom@gmail.com"
            iconSrc="https://placehold.co/20x20"
            labelText="E-mail"
          />
          <Button text="Login with Email" color="blue-500" />
            {providers  !== null && Object.values(providers).map((provider, index) => (
            <Button
              onClick={() => signIn(provider.id)}
              key={index}
              style={{ color: 'black' }}
              text={`Sign up with ${provider.name}`}
              color="zinc-100"
              icon="https://placehold.co/20x20" // Placeholder icon for Google
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default ReactComponent;

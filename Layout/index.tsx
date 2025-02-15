"use client";
import React from 'react';
import Sidebar from '../src/app/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-[#083317] text-white">
        <Sidebar/>
      </div>
      <div className="flex-grow p-4">
        {children}
      </div>
    </div>
  );
}
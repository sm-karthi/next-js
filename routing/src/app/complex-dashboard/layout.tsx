import React from "react";

export default function ComplexDashboardLayout({
  children,
  revenue,
  notifications,
  users,
  login

}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;


}) {

  const isLogin = false;

  return isLogin ? (
    <div className="mb-32">
      <div>{children}</div>

      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  )

}
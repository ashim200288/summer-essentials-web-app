'use client';

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { UpdateUserModal } from "@/components/UpdateUserModal";

const ProfilePage = () => {
  const { data: session, isLoading } = useSession();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  // session → local state sync
  if (!user && session) {
    setUser(session.user);
  }

  if (isLoading) return <p className="p-6">Loading...</p>;

  if (!user) return <p className="p-6">You are not logged in</p>;
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">

        {/* Avatar */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-2xl font-bold mt-3">
            {user.name}
          </h1>

          <p className="text-gray-500 text-sm">
            {user.email}
          </p>
        </div>

        {/* Update Button */}
        <button
          onClick={() => setOpen(true)}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-lg font-semibold"
        >
          Update Profile
        </button>

      </div>

      {/* Modal */}
      {open && (
        <UpdateUserModal
          user={user}
          onClose={() => setOpen(false)}
          onUpdate={(updatedUser) => {
            setUser(updatedUser);
            setOpen(false);
          }}
        />
      )}

    </div>
  );
};

export default ProfilePage;
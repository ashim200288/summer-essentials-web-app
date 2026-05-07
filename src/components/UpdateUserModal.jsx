'use client';

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function UpdateUserModal({ user, onClose, onUpdate }) {
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    console.log("update response:", { data, error });

    setLoading(false);

    if (error) {
      alert(error.message || "Update failed");
      return;
    }

    if (data?.user) {
      onUpdate(data.user); // profile page update
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96 space-y-3"
      >
        <h2 className="text-xl font-bold">Update Profile</h2>

        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          className="w-full border p-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />

        <div className="flex gap-2 pt-2">

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-200 py-2 rounded"
          >
            Cancel
          </button>

          {/* 🔥 THIS IS THE SAVE BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-2 rounded"
          >
            {loading ? "Saving..." : "Save"}
          </button>

        </div>
      </form>
    </div>
  );
}
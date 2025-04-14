
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ProfileCard from '../components/profile/ProfileCard';
import ProfileForm from '../components/profile/ProfileForm';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

// Mock profile data
const mockProfile = {
  businessName: "John's Beauty Spa",
  proprietorName: "John Smith",
  phone: "+1 (555) 123-4567",
  email: "john@beautyspacompany.com",
  tradeLicense: "BUS-123456789",
  businessType: "Beauty & Wellness",
  establishmentYear: "2018",
  businessHours: "Mon-Sat: 9AM-7PM, Sun: Closed",
  address: "123 Beauty Street",
  city: "San Francisco",
  state: "CA",
  zipCode: "94102",
  profileImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
};

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Load profile (simulate API call)
  useEffect(() => {
    const loadProfile = () => {
      setTimeout(() => {
        setProfile(mockProfile);
        setLoading(false);
      }, 800); // Simulate loading delay
    };

    loadProfile();
  }, []);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };

  const handleFormCancel = () => {
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="page-container">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Business Profile</h1>

        {loading ? (
          <div className="py-20 flex justify-center">
            <div className="flex items-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
              <span className="text-lg text-gray-600">Loading profile...</span>
            </div>
          </div>
        ) : (
          <>
            {isEditing ? (
              <ProfileForm
                profile={profile}
                onSubmit={handleFormSubmit}
                onCancel={handleFormCancel}
              />
            ) : (
              <ProfileCard
                profile={profile}
                onEditClick={handleEditProfile}
              />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Profile;

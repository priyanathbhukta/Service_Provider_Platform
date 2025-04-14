
import React from 'react';
import { Camera, MapPin, Phone, Mail, Edit2 } from 'lucide-react';

const ProfileCard = ({ profile, onEditClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-accent h-32"></div>
      <div className="px-6 pb-6">
        <div className="relative flex justify-center">
          <div className="absolute -top-16">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200 flex items-center justify-center">
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={profile.businessName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl text-gray-400">{profile.businessName.charAt(0)}</span>
                )}
              </div>
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md border border-gray-200">
                <Camera className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{profile.businessName}</h2>
          <p className="text-gray-500">{profile.businessType}</p>

          <button 
            onClick={onEditClick}
            className="mt-4 inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
          >
            <Edit2 className="mr-2 h-4 w-4" />
            Edit Profile
          </button>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6 space-y-4">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">
              {profile.address}, {profile.city}, {profile.state}, {profile.zipCode}
            </span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">{profile.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">{profile.email}</span>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Business Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Proprietor</p>
              <p className="font-medium">{profile.proprietorName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Trade License</p>
              <p className="font-medium">{profile.tradeLicense || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Established</p>
              <p className="font-medium">{profile.establishmentYear || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Available Hours</p>
              <p className="font-medium">{profile.businessHours || "Not provided"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

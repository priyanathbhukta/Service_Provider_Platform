
import React from 'react';
import { Calendar, Clock, User, MapPin, DollarSign, ExternalLink } from 'lucide-react';

const OrderCard = ({ order, onViewDetails, onUpdateStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      // case 'cancelled':
      //   return 'bg-red-100 text-red-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium text-gray-900">Order #{order.id}</h3>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>
      
      <div className="mt-4 space-y-3">
        <div className="flex items-start">
          <User className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-gray-600">{order.customerName}</span>
        </div>
        
        <div className="flex items-start">
          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-gray-600">{formatDate(order.date)}</span>
          
          <Clock className="h-5 w-5 text-gray-400 ml-4 mr-2" />
          <span className="text-gray-600">{order.time}</span>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-gray-600 text-sm">{order.address}</span>
        </div>
        
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-gray-900 font-semibold">${order.amount.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm font-medium text-gray-500">Service Type:</span>
            <span className="ml-2 text-sm text-gray-900">{order.serviceType}</span>
          </div>
          <button
            onClick={() => onViewDetails(order)}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View Details
            <ExternalLink className="ml-1 h-4 w-4" />
          </button>
        </div>
        
         {order.status === 'pending' && (
          <div className="mt-4 flex space-x-3">
            <button
              onClick={() => onUpdateStatus(order.id, 'in-progress')}
              className="flex-1 bg-primary text-white px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Start Serving
            </button>
          </div>
         )}
            {/*<button
              onClick={() => onUpdateStatus(order.id, 'cancelled')}
              className="flex-1 bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Decline
            </button>
          </div>
        )} */}
        
        {order.status === 'in-progress' && (
          <div className="mt-4">
            <button
              onClick={() => onUpdateStatus(order.id, 'completed')}
              className="w-full bg-green-600 text-white px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Mark as Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;

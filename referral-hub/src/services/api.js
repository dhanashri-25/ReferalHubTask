import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Dummy data for development
const dummyData = {
  campaigns: [
    {
      id: 1,
      name: 'Summer Referral Special',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      status: 'Completed',
      stats: {
        referrals: 245,
        conversion: '25%',
        revenue: '267%',
      },
    },
    {
      id: 2,
      name: 'Early Bird Special',
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      status: 'Active',
      stats: {
        referrals: 300,
        conversion: '40%',
        revenue: '220%',
      },
    },
  ],
  leads: [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      campaign: 'Summer Special',
      status: 'New',
      date: '2024-03-15',
      value: '$250',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '+1 (555) 234-5678',
      campaign: 'Early Bird',
      status: 'Contacted',
      date: '2024-03-14',
      value: '$500',
    },
  ],
};

// Auth API
export const auth = {
  login: async (credentials) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (credentials.email === 'demo@example.com' && credentials.password === 'demo123') {
      const token = 'dummy-token';
      localStorage.setItem('token', token);
      return { token };
    }
    throw new Error('Invalid credentials');
  },

  register: async (userData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { message: 'Registration successful' };
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

// Campaigns API
export const campaigns = {
  getAll: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return dummyData.campaigns;
  },

  getById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return dummyData.campaigns.find((campaign) => campaign.id === id);
  },

  create: async (campaignData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id: Date.now(),
      ...campaignData,
      status: 'Active',
      stats: {
        referrals: 0,
        conversion: '0%',
        revenue: '0%',
      },
    };
  },

  update: async (id, campaignData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id,
      ...campaignData,
    };
  },

  delete: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { message: 'Campaign deleted successfully' };
  },
};

// Leads API
export const leads = {
  getAll: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return dummyData.leads;
  },

  getById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return dummyData.leads.find((lead) => lead.id === id);
  },

  create: async (leadData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id: Date.now(),
      ...leadData,
      status: 'New',
      date: new Date().toISOString().split('T')[0],
    };
  },

  update: async (id, leadData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id,
      ...leadData,
    };
  },

  delete: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { message: 'Lead deleted successfully' };
  },
};

// Business Profile API
export const businessProfile = {
  get: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      name: 'Demo Business',
      email: 'contact@demobusiness.com',
      phone: '+1 (555) 987-6543',
      description: 'A demo business for testing purposes',
      industry: 'SaaS / Software',
      services: 'Software Development, Consulting',
      products: 'ReferralHub, Other Products',
      companySize: '11-50',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
    };
  },

  update: async (profileData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return profileData;
  },
};

export default api;
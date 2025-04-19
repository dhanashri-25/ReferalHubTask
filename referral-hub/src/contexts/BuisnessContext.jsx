import { createContext, useContext, useState, useCallback } from 'react';
import { business } from '../services/api';

const BusinessContext = createContext(null);

export const BusinessProvider = ({ children }) => {
  const [businessProfile, setBusinessProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBusinessProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await business.getBusinessProfile();
      setBusinessProfile(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateBusinessProfile = useCallback(async (profileData) => {
    try {
      setLoading(true);
      setError(null);
      const updatedProfile = await business.updateBusinessProfile(profileData);
      setBusinessProfile(updatedProfile);
      return updatedProfile;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateBusinessSettings = useCallback(async (settings) => {
    try {
      setLoading(true);
      setError(null);
      const updatedProfile = await business.updateBusinessSettings(settings);
      setBusinessProfile(prev => ({
        ...prev,
        settings: updatedProfile.settings
      }));
      return updatedProfile;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateNotificationPreferences = useCallback(async (preferences) => {
    try {
      setLoading(true);
      setError(null);
      const updatedProfile = await business.updateNotificationPreferences(preferences);
      setBusinessProfile(prev => ({
        ...prev,
        notificationPreferences: updatedProfile.notificationPreferences
      }));
      return updatedProfile;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadBusinessLogo = useCallback(async (file) => {
    try {
      setLoading(true);
      setError(null);
      const updatedProfile = await business.uploadBusinessLogo(file);
      setBusinessProfile(prev => ({
        ...prev,
        logo: updatedProfile.logo
      }));
      return updatedProfile;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    businessProfile,
    loading,
    error,
    fetchBusinessProfile,
    updateBusinessProfile,
    updateBusinessSettings,
    updateNotificationPreferences,
    uploadBusinessLogo,
  };

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};

export default BusinessContext;
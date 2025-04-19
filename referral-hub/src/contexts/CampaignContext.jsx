import { createContext, useContext, useState, useCallback } from 'react';
import { campaigns } from '../services/api';

const CampaignContext = createContext(null);

export const CampaignProvider = ({ children }) => {
  const [campaignsList, setCampaignsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCampaigns = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await campaigns.getAllCampaigns();
      setCampaignsList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getCampaign = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      return await campaigns.getCampaignById(id);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createCampaign = useCallback(async (campaignData) => {
    try {
      setLoading(true);
      setError(null);
      const newCampaign = await campaigns.createCampaign(campaignData);
      setCampaignsList(prev => [...prev, newCampaign]);
      return newCampaign;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCampaign = useCallback(async (id, campaignData) => {
    try {
      setLoading(true);
      setError(null);
      const updatedCampaign = await campaigns.updateCampaign(id, campaignData);
      setCampaignsList(prev =>
        prev.map(campaign =>
          campaign.id === id ? updatedCampaign : campaign
        )
      );
      return updatedCampaign;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteCampaign = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      await campaigns.deleteCampaign(id);
      setCampaignsList(prev =>
        prev.filter(campaign => campaign.id !== id)
      );
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    campaigns: campaignsList,
    loading,
    error,
    fetchCampaigns,
    getCampaign,
    createCampaign,
    updateCampaign,
    deleteCampaign,
  };

  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaigns = () => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaigns must be used within a CampaignProvider');
  }
  return context;
};

export default CampaignContext;
import { createContext, useContext, useState, useCallback } from 'react';
import { leads } from '../services/api';

const LeadContext = createContext(null);

export const LeadProvider = ({ children }) => {
  const [leadsList, setLeadsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLeads = useCallback(async (filters = {}) => {
    try {
      setLoading(true);
      setError(null);
      const data = await leads.getAllLeads(filters);
      setLeadsList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getLead = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      return await leads.getLeadById(id);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createLead = useCallback(async (leadData) => {
    try {
      setLoading(true);
      setError(null);
      const newLead = await leads.createLead(leadData);
      setLeadsList(prev => [...prev, newLead]);
      return newLead;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateLead = useCallback(async (id, leadData) => {
    try {
      setLoading(true);
      setError(null);
      const updatedLead = await leads.updateLead(id, leadData);
      setLeadsList(prev =>
        prev.map(lead =>
          lead.id === id ? updatedLead : lead
        )
      );
      return updatedLead;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteLead = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      await leads.deleteLead(id);
      setLeadsList(prev =>
        prev.filter(lead => lead.id !== id)
      );
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const assignLead = useCallback(async (leadId, userId) => {
    try {
      setLoading(true);
      setError(null);
      const updatedLead = await leads.assignLead(leadId, userId);
      setLeadsList(prev =>
        prev.map(lead =>
          lead.id === leadId ? updatedLead : lead
        )
      );
      return updatedLead;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateLeadStatus = useCallback(async (leadId, status) => {
    try {
      setLoading(true);
      setError(null);
      const updatedLead = await leads.updateLeadStatus(leadId, status);
      setLeadsList(prev =>
        prev.map(lead =>
          lead.id === leadId ? updatedLead : lead
        )
      );
      return updatedLead;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    leads: leadsList,
    loading,
    error,
    fetchLeads,
    getLead,
    createLead,
    updateLead,
    deleteLead,
    assignLead,
    updateLeadStatus,
  };

  return (
    <LeadContext.Provider value={value}>
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = () => {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error('useLeads must be used within a LeadProvider');
  }
  return context;
};

export default LeadContext;
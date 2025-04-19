import { AuthProvider } from './AuthContext';
import { CampaignProvider } from './CampaignContext';
import { LeadProvider } from './LeadContext';
import { BusinessProvider } from './BusinessContext';

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <BusinessProvider>
        <CampaignProvider>
          <LeadProvider>
            {children}
          </LeadProvider>
        </CampaignProvider>
      </BusinessProvider>
    </AuthProvider>
  );
};

export default AppProvider;
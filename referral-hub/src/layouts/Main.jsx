import React , {useState} from 'react'
import BusinessProfileSetup from "../components/BusinessProfileSetup"
import SyncCustomerData from "../components/SyncCustomerData"
import AIAgentRules from '../components/AIAgentRules'
import FirstCampaign from '../components/FirstCampaign'
import Dashboard from '../pages/Dashboard'

const Main = ({firstTime , setFirstTime }) => {

  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToBckStep = () => {
    setCurrentStep(currentStep - 1);
  }


  return (
    <div>
    {!firstTime ? (
      <Dashboard  />
    ) : (
      <div className="flex flex-col gap-4">
        {currentStep === 1 && <BusinessProfileSetup goToNextStep={goToNextStep} />}
        {currentStep === 2 && <SyncCustomerData goToNextStep={goToNextStep}  goToBckStep ={goToBckStep}  />}
        {currentStep === 3 && <AIAgentRules goToNextStep={goToNextStep} goToBckStep ={goToBckStep}  />}
        {currentStep === 4 && <FirstCampaign setFirstTime={setFirstTime}   />}
        
      </div>
    )}
    </div>
  )
}

export default Main

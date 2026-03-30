import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/ProcessOverview';
import PdfDemo from './components/PdfDemo';
import AiPromo from './components/AiPromo';
import ResourceCenter from './components/ResourceCenter';
import HelpCentre from './components/HelpCentre';
import FeaturesExamples from './components/FeaturesExamples';
import ActiveFeatures from './components/ActiveFeatures';
import FormBuilder from './pages/FormBuilder';  
import Overview from './pages/Overview';
import OurVision from './pages/OurVision';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import HelpSupport from './pages/HelpSupport';
import ContactUs from './pages/ContactUs';
import SurveyMonetization from './pages/SurveyMonetization';
import Dashboard from './pages/Dashboard'; // Adjust the path based on where the component is located
import Customerfeedback from './pages/Customerfeedback';
import EmployeeReview from './pages/EmployeeReview';  
import Resourcecenter from './pages/Resourcecenter';
import ResourcesHub from './pages/ResourcesHub'; 
import Market_Research from './pages/Market_Research';
import EventSignup from './pages/EventSignup';
import AllTemplates from './pages/AllTemplates';
import MonetizationTemplates from './pages/MonetizationTemplates';
import LeadMagnetForms from './pages/LeadMagnetForms';
import MeetTheTeam from './pages/MeetTheTeam';
import PrivacyAndTerms from './pages/PrivacyAndTerms';
import Partnerships from './pages/Partnerships';
import CreatorSpotlight from './pages/CreatorSpotlight';
import LogicRules from './pages/LogicRules';
import UploadPdfPage from './pages/UploadPdfPage';
import AiSurveyTool from './pages/AiSurveyTool';
import Analytics from './pages/Analytics';
import PartnerToolsPage from './pages/PartnerToolsPage';
import PublisherSuitePage from './pages/PublisherSuitePage';
import SmartRoutingPage from './pages/SmartRoutingPage';
import CommunityShowcases from './pages/CommunityShowcases';
import AIPromptsLibrary from './pages/AIPromptsLibrary';
import BuildSurveyGuidePage from './pages/BuildSurveyGuidePage';
import AIFormCreatorGuidePage from './pages/AIFormCreatorGuidePage';
import SurveyTipsPage from './pages/SurveyTipsPage';
import BestPracticesPage from './pages/BestPracticesPage';
import SurveyRevenuePage from './pages/SurveyRevenuePage';
import ManageFeatures from "./pages/ManageFeatures";
import EditProcessOverview from "./editPages/EditProcessOverview";
import EditPdfDemo from './editPages/EditPdfDemo';
import EditAipromo from './editPages/EditAipromo';
import EditMicroGuides from './editPages/EditMicroGuides';
import Landing1 from './pages/Landing1';
import Landing2 from './pages/Landing2';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import AIChatWidget from './components/AIChatWidget';
import NotFound from './pages/NotFound';
import Plan from './pages/plan';


const HomePage = () => <Hero />;
const FeaturesPage = () => <Features />;
const ExamplesPage = () => <FeaturesExamples />;
const HowItWorksPage = () => <HowItWorks />;
const PdfDemoPage = () => <PdfDemo />;
const AiPromoPage = () => <AiPromo />;
const ResourcesPage = () => <ResourceCenter />;
const ActiveFeaturesPage = () => <ActiveFeatures />;
const HelpCentrePage = () => <HelpCentre />;

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing2 />} />
            
            <Route path="/features/*" element={<FeaturesPage />} />
            <Route path="/featuresexample/*" element={<ExamplesPage />} />
            <Route path="/processoverview" element={<HowItWorksPage />} />
            <Route path="/pdf-demo" element={<PdfDemoPage />} />
            <Route path="/ai-promo" element={<AiPromoPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/active-features" element={<ActiveFeaturesPage />} />
            <Route path="/help-centre" element={<HelpCentrePage />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/formbuilder" element={<FormBuilder />} />
            <Route path="/ourvision" element={<OurVision />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/resourcecenter" element={<ResourceCenter />} />
            <Route path="/resource-center" element={<Resourcecenter />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/helpsupport" element={<HelpSupport />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/monetization" element={<SurveyMonetization />} />
            <Route path="/customer-feedback" element={<Customerfeedback />} />
            <Route path="/employee-review" element={<EmployeeReview />} />
            <Route path="/resourceshub" element={<ResourcesHub />} />
            <Route path="/marketsurvey" element={<Market_Research />} />
            <Route path="/event-signup" element={<EventSignup />} />
            <Route path='/alltemplates' element={<AllTemplates />} />
            <Route path='/monetizationtemplates' element={<MonetizationTemplates />} />
            <Route path='/leadmagnetforms' element={<LeadMagnetForms />} />
            <Route path='/meettheteam' element={<MeetTheTeam />} />
            <Route path='/privacyandterms' element={<PrivacyAndTerms />} />
            <Route path='/partnerships'   element={<Partnerships />} />
            <Route path='/creator-spotlight'   element={<CreatorSpotlight />} />
            <Route path='/logicrules'   element={<LogicRules />} />
            <Route path='/uploadpdf'   element={<UploadPdfPage />} />
            <Route path='/aisurveytool'   element={<AiSurveyTool />} />
            <Route path='/analytics'   element={<Analytics />} />
            <Route path='/partnertools'   element={<PartnerToolsPage />} />
            <Route path='/publishersuite'   element={<PublisherSuitePage />} />
            <Route path='/smartrouting'   element={<SmartRoutingPage />} />
            <Route path='/communityshowcases'   element={<CommunityShowcases />} />
            <Route path='/ai-prompts'   element={<AIPromptsLibrary />} />
            <Route path='/how-to-build'   element={<BuildSurveyGuidePage />} />
            <Route path='/ai-creator'   element={<AIFormCreatorGuidePage />} />
            <Route path='/tips'   element={<SurveyTipsPage />} />
            <Route path='/best-practices'   element={<BestPracticesPage />} />
            <Route path='/grow-revenue'   element={<SurveyRevenuePage />} />
            <Route path="/manage-features" element={<ManageFeatures />} />
            <Route path="/edit-process-overview" element={<EditProcessOverview />} />
            <Route path="/landing1" element={<Landing1 />} />
            {/* <Route path="/landing2" element={<Landing2 />} /> */}
            <Route path="/edit-pdf-demo" element={<EditPdfDemo />} />
            <Route path="/edit-ai-promo" element={<EditAipromo />} />
            <Route path="/edit-micro-guides" element={<EditMicroGuides />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/CaseStudies" element={<CaseStudies/>} />
            <Route path="/AIChatWidget" element={<AIChatWidget/>} />
            
            <Route path="*" element={<NotFound />} />
             <Route path="/plan" element={<Plan />} />
            {/* <Route path="/termandcon" element={<Termandcon/>} /> */}
           
       
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default App;

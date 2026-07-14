import React from 'react';
import CampaignManager from './components/CampaignManager';
import Header from './components/Header';
import Footer from './components/Footer';

function CampaignPage() {
  return (
    <div className="App" style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      <Header />
      <CampaignManager />
      <Footer />
    </div>
  );
}

export default CampaignPage;
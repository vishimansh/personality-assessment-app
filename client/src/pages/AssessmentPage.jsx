import React from 'react';
import Navbar from '../components/common/Navbar';
import AssessmentFlow from '../components/assessment/AssessmentFlow';

const AssessmentPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <AssessmentFlow />
      </div>
    </div>
  );
};

export default AssessmentPage;

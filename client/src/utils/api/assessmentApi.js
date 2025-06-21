import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/assessment';

// Function to submit assessment results
export const submitAssessment = async (assessmentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/submit`, assessmentData);
    return response.data;
  } catch (error) {
    console.error('Error submitting assessment:', error.response?.data || error.message);
    throw error;
  }
};

// Function to get assessment result by ID
export const getAssessmentResult = async (assessmentId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/result/${assessmentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assessment result:', error.response?.data || error.message);
    throw error;
  }
};

// Function to get assessment statistics
export const getAssessmentStats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stats`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assessment stats:', error.response?.data || error.message);
    throw error;
  }
};

const axios = require('axios');

const testAssessment = async () => {
  try {
    console.log('🧪 Testing Assessment API...\n');

    // Sample assessment data
    const assessmentData = {
      userId: 'testuser123',
      responses: [
        { questionId: 1, selectedOption: { text: 'Strongly Agree', value: 'E', points: 2 } },
        { questionId: 2, selectedOption: { text: 'Somewhat Disagree', value: 'I', points: 1 } },
        { questionId: 3, selectedOption: { text: 'Strongly Agree', value: 'N', points: 2 } }
      ],
      personalityType: 'ENFP'
    };

    // Test POST - Save assessment
    console.log('📤 Testing POST /api/assessment/submit...');
    const postResponse = await axios.post('http://localhost:5000/api/assessment/submit', assessmentData);
    console.log('✅ POST Response:', postResponse.data);

    const assessmentId = postResponse.data.assessment._id;
    console.log(`📝 Assessment ID: ${assessmentId}\n`);

    // Test GET - Retrieve assessment
    console.log('📥 Testing GET /api/assessment/result/:id...');
    const getResponse = await axios.get(`http://localhost:5000/api/assessment/result/${assessmentId}`);
    console.log('✅ GET Response:', getResponse.data);

    // Test Stats
    console.log('\n📊 Testing GET /api/assessment/stats...');
    const statsResponse = await axios.get('http://localhost:5000/api/assessment/stats');
    console.log('✅ Stats Response:', statsResponse.data);

  } catch (error) {
    console.error('❌ Test API error:', error.response?.data || error.message);
  }
};

testAssessment();

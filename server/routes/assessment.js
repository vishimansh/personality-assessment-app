const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assessment');

// POST /api/assessment/submit - Save assessment results
router.post('/submit', async (req, res) => {
  try {
    console.log('🔍 POST /api/assessment/submit called');
    console.log('📥 Request body:', JSON.stringify(req.body, null, 2));
    
    const { userId, responses, personalityType } = req.body;

    if (!responses || !personalityType) {
      console.log('❌ Missing required fields');
      return res.status(400).json({ 
        message: 'Responses and personalityType are required',
        success: false 
      });
    }

    console.log('✅ Validation passed, creating assessment...');
    console.log('📊 Responses count:', responses.length);
    console.log('🎯 Personality type:', personalityType);

    const newAssessment = new Assessment({ 
      userId, 
      responses, 
      personalityType 
    });
    
    console.log('💾 Saving to database...');
    const savedAssessment = await newAssessment.save();
    console.log('✅ Assessment saved with ID:', savedAssessment._id);

    res.status(201).json({ 
      message: 'Assessment saved successfully', 
      success: true,
      assessment: savedAssessment 
    });
  } catch (error) {
    console.error('❌ DETAILED ERROR saving assessment:');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error name:', error.name);
    
    res.status(500).json({ 
      message: 'Server error saving assessment',
      success: false,
      error: error.message // Include error details for debugging
    });
  }
});

// Keep your other routes unchanged...
router.get('/result/:id', async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);
    
    if (!assessment) {
      return res.status(404).json({ 
        message: 'Assessment not found',
        success: false 
      });
    }
    
    res.json({ 
      success: true,
      assessment 
    });
  } catch (error) {
    console.error('Error retrieving assessment:', error);
    res.status(500).json({ 
      message: 'Server error retrieving assessment',
      success: false 
    });
  }
});

router.get('/stats', async (req, res) => {
  try {
    const totalAssessments = await Assessment.countDocuments();
    const personalityTypeStats = await Assessment.aggregate([
      { $group: { _id: '$personalityType', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({
      success: true,
      stats: {
        totalAssessments,
        personalityTypeDistribution: personalityTypeStats
      }
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ 
      message: 'Server error getting statistics',
      success: false 
    });
  }
});

module.exports = router;

const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  userId: { type: String, required: false }, // Optional user ID for future auth
  responses: [
    {
      questionId: { type: Number, required: true },
      selectedOption: {
        text: { type: String, required: true },
        value: { type: String, required: true },
        points: { type: Number, required: true }
      }
    }
  ],
  personalityType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;

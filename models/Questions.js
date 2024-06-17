import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
  explanation: String
});

const SectionSchema = new mongoose.Schema({
  section: String,
  questions: [QuestionSchema]
});

const QuizSchema = new mongoose.Schema({
  sections: [SectionSchema]
});

const Question = mongoose.models.Question || mongoose.model('Question', QuizSchema);

export default Question;

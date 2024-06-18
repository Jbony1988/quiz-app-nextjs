import connectDB from '../../../config/database';
import Question from '../../../models/Questions'; // Assuming the correct model name is QuizModel
import Property from '../../../models/Property'
export const GET = async (request) => {
  try {
    await connectDB();
    const questions = await Question.find({});
    return new Response(JSON.stringify({ message: questions }), { status: 200 });
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return new Response('Something went wrong', { status: 500 });
  }
};

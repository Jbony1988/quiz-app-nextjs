import connectDB from '../../../config/database';
import Quiz from '../../../models/Questions'; // Assuming the correct model name is QuizModel

export const GET = async (request) => {
  try {
    // await connectDB();
    const quiz = await Quiz.find({});
    return new Response(JSON.stringify({ message: quiz }), { status: 200 });
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    return new Response('Something went wrong', { status: 500 });
  }
};

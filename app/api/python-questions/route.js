import connectDB from "../../../config/database"
export const GET = async (request) => {
    try {
        // await connectDB()
        return new Response(JSON.stringify({MESSAGE: 'hELLO WORLD'}), {status:200})
    } catch (error) {
        console.log(error)
        return new Response('Something is wrong', {status:500})
        
    }
}
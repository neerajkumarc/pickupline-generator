"use server"
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generatePickupLine(style: string, crushDescription: string) {
  const prompt = `Goal: Generate a friendly, respectful, and appropriate short pickup line for your crush based on the description provided.
Person's Description: ${crushDescription}
Style: ${style}
Generate a unique and engaging pickup line that is friendly, charming, and appropriate for the given Person's description. The pickup line should focus on complimenting the person's positive qualities, avoid any inappropriate or harmful content, and be respectful of the person's boundaries and preferences. The tone should be lighthearted and genuine, without being overly forward or making the person uncomfortable.
output only the pickup line text
`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.5,
      max_tokens: 80,
      top_p: 0.8,
      frequency_penalty: 0.7,
      presence_penalty: 0.7,
    });

    const pickupLine = chatCompletion.choices[0]?.message?.content || "";
    return pickupLine;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while generating the pickup line. Please try again later.");
  }
}

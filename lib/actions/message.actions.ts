"use server";

import connectToDb from "../database";
import Message from "../database/models/Message";

type FormState = {
  submitted: boolean;
};

export const createMessage = async (
  previousState: FormState,
  formData: FormData
): Promise<{ submitted: boolean }> => {
  try {
    // Ensure database connection
    await connectToDb();

    // Extract form data with better null checks
    const email = formData.get("email");
    const fullName = formData.get("fullName");
    const content = formData.get("content");

    // Handle missing form data
    if (!email || !fullName || !content) {
      console.error("Missing form data");
      return { submitted: false };
    }

    // Create message content object
    const messageContent = {
      email: email as string,
      fullName: fullName as string,
      content: content as string,
    };

    // Insert the message into the database
    const newMessage = await Message.create(messageContent);

    // Check if the message was created successfully
    if (newMessage) {
      return { submitted: true };
    } else {
      console.error("Message creation failed");
      return { submitted: false };
    }
  } catch (error) {
    console.error("Error in createMessage:", error);
    return { submitted: false };
  }
};

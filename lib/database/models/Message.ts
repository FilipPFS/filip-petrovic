import { model, models, Schema } from "mongoose";

export interface IMessage {
  _id: string;
  fullName: string;
  email: string;
  content: string;
}

const MessageSchema = new Schema({
  email: { type: String, required: true },
  content: { type: String, required: true },
  fullName: { type: String, required: true },
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;

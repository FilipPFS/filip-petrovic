import { deleteMessage, getMessages } from "@/lib/actions/message.actions";
import { IMessage } from "@/lib/database/models/Message";
import React from "react";

const Messages = async () => {
  const messages: IMessage[] = await getMessages();

  if (!messages) {
    return <div>0 Messages</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center">Tous les messages</h1>
      <div className="flex flex-col gap-4 mt-3">
        {messages.length > 0 && (
          <>
            {messages.map((message) => (
              <div
                key={message._id}
                className="bg-[#20132f] p-6 flex flex-col gap-3 rounded-md"
              >
                <h1 className="text-2xl text-blue-100 font-semibold">
                  Auteur: {message.fullName}
                </h1>
                <h3 className="text-lg">Mail: {message.email}</h3>
                <p className="text-base whitespace-pre-line">
                  Message: {message.content}
                </p>
                <form action={deleteMessage}>
                  <input
                    type="hidden"
                    name="messageId"
                    defaultValue={message._id}
                  />
                  <button className="bg-red-600 p-2 rounded-sm font-semibold hover:bg-red-700 active:bg-red-800 cursor-pointer">
                    Supprimer
                  </button>
                </form>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Messages;

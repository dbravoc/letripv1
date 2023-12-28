import React, { useState, useEffect, useRef } from 'react';

export default function ChatComponent() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const chatContainerRef = useRef(null);

    const handleSendMessage = async (e) => {
      e.preventDefault();
      if (messageInput.trim() === '') return;
  
      const userMessage = { sender: 'user', text: messageInput };
      setMessages([userMessage, ...messages]);
  
      try {
          const response = await fetch('http://localhost:3000/message', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ message: messageInput }),
          });
  
          const data = await response.json();
          // Asegúrate de que esta línea refleje cómo tu backend estructura la respuesta
          const botMessage = { sender: 'bot', text: data.reply }; 
          setMessages(messages => [botMessage, ...messages]);
      } catch (error) {
          console.error('Error al enviar el mensaje:', error);
      }
  
      setMessageInput('');
    };

    // ...

    // El resto del componente permanece igual
   useEffect(() => {
     if (chatContainerRef.current) {
       const chatContainer = chatContainerRef.current;
       window.scrollTo(0, chatContainer.offsetTop - (window.innerHeight - chatContainer.offsetHeight) / 2);
     }
   }, [messages]);
 

   return (
    <div ref={chatContainerRef} className="flex min-h-full flex-1 flex-col justify-center py-1 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white shadow rounded-md p-4 overflow-y-auto max-h-96">
            <div className="flex flex-col-reverse space-y-reverse space-y-2">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <span className={`rounded-md px-3 py-2 ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="mt-4 flex space-x-3">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Conversa por aquí"
                    className="flex-1 rounded-md border-2 border-gray-300 p-2 focus:border-indigo-500"
                />
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
                >
                    Enviar
                </button>
            </form>
        </div>
    </div>
);
}
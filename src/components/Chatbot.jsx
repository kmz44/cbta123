import React, { useState, useEffect } from "react";
import ChatbotPrompt from "./ChatbotPrompt";
import "./Chatbot.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(() => {
    // Cargar el estado de apertura del chatbot desde localStorage
    const savedChatState = localStorage.getItem("isChatOpen");
    return savedChatState ? JSON.parse(savedChatState) : false;
  });

  // Cargar las conversaciones guardadas al iniciar
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatbotMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Agregar mensaje de bienvenida si no hay conversaciones guardadas
      const welcomeMessage = {
        text: "¡Hola! Soy <strong>Camaleón IA</strong>, tu asistente virtual del CBTA 134. Estoy aquí para ayudarte con información sobre nuestra institución, carreras, clubs y más. ¿En qué puedo ayudarte hoy?",
        sender: "bot"
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  // Guardar las conversaciones en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("chatbotMessages", JSON.stringify(messages));
  }, [messages]);

  // Guardar el estado de apertura del chatbot en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("isChatOpen", JSON.stringify(isChatOpen));
  }, [isChatOpen]);

  // Función para formatear texto (negritas, cursivas, saltos de línea)
  const formatText = (text) => {
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Negritas
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>"); // Cursivas
    text = text.replace(/\n/g, "<br />"); // Saltos de línea
    return text;
  };

  // Función para manejar el envío de mensajes
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Agregar el mensaje del usuario al chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Crear el historial de la conversación
      const conversationHistory = messages
        .map((msg) => `${msg.sender === "user" ? "Usuario" : "Chatbot"}: ${msg.text}`)
        .join("\n");

      // Configurar la API key de Google Gemini
  const API_KEY = "AIzaSyCAZbQCJPHiBM2AEyGFu1p4VRNNFsFXuj0";
      const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

      // Preparar el contenido del prompt
      const fullPrompt = `${ChatbotPrompt}\n\nHistorial de la conversación:\n${conversationHistory}\n\nUsuario: ${input}`;

      console.log("Enviando solicitud a:", API_URL);
      console.log("Prompt:", fullPrompt);

      // Enviar la solicitud a la API de Google Gemini
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: fullPrompt
            }]
          }]
        }),
      });

      console.log("Estado de la respuesta:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error de la API:", errorText);
        throw new Error(`Error de la API: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Respuesta de la API:", data);

      // Agregar la respuesta del bot al chat
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
        const botResponse = data.candidates[0].content.parts[0].text;
        const formattedText = formatText(botResponse);
        const botMessage = { text: formattedText, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else if (data.error) {
        console.error("Error de la API:", data.error);
        const botMessage = { text: `Lo siento, ocurrió un error: ${data.error.message}`, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.log("Respuesta completa de la API:", data);
        const botMessage = { text: "Lo siento, no pude procesar tu mensaje. ¿Podrías intentar de nuevo?", sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error("Error completo:", error);
      const botMessage = { text: `Error al conectar con Camaleón IA: ${error.message}. Verifica tu conexión a internet e intenta de nuevo.`, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    setIsLoading(false);
  };

  return (
    <div className={`chatbot-container ${isChatOpen ? "open" : ""}`}>
      {/* Burbuja del chatbot con el ícono de camaleón */}
      <div className="chatbot-bubble-wrapper">
        <div className="chatbot-bubble" onClick={() => setIsChatOpen(!isChatOpen)}>
          <img src="/images/camaleonicono.jpg" alt="Camaleón IA" className="camaleon-icon" />
        </div>
        <p className="chatbot-label">Camaleón IA</p>
      </div>

      {/* Ventana del chat */}
      {isChatOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Camaleón IA</h3>
            <button className="close-btn" onClick={() => setIsChatOpen(false)}>
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <div dangerouslySetInnerHTML={{ __html: message.text }} />
              </div>
            ))}
            {isLoading && <div className="message bot">Escribiendo...</div>}
          </div>
          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
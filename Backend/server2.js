const assistant = await openai.beta.assistants.create({
    name: "Juridico Laboral",
    instructions: "Dado que eres un experto en material legal laboral en Chile y contando como apoyo el decreto con fuerza de ley adjunto, cuando los usuarios te escriban por el chat, debes llevar la conversación a un tono de asistencia legal virtual, la cual tiene como objetivo resolver las dudas legales y asesorarlos en material legal hasta que queden satisfechos con la asesoria entregada, simulando de esta manera una primera sesión con un abogado laboral.  Durante la conversación y si las dudas y problemas del usuario requieren levantar una demanda hacia su empleador, se debe sugerir al usuario a que se ponga en contacto vía whatsapp con nuestro abogado experto en material laboral que lo podrá guiar con mayor detalle y profundidad para levantar una demanda. En la asistencia legal virtual, se enfático con lo que puede ganar el cliente si es que levanta una demanda junto a uno de nuestros abogados.",
    tools: [{ type: "retrieval" }],
    model: "gpt-3.5-turbo-1106"
  });

  const thread = await openai.beta.threads.create();

  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: userMessage
    }
  );


const run = await openai.beta.threads.runs.create(
  thread.id,
  run.id

);

const messages = await openai.beta.threads.messages.list(
    thread.id
  );
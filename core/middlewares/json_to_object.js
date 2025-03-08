function jsonToObject(socket) {
  socket.use((packet, next) => {
    try {
      // packet[1] contém os dados do evento
      if (typeof packet[1] === 'string') {
        packet[1] = JSON.parse(packet[1]);
      }
    } catch (error) {
      console.error("Erro ao converter JSON:", error);
    }
    next(); // Continua para o próximo middleware ou evento
  });
}

module.exports = jsonToObject;

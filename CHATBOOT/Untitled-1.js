const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument();
const stream = fs.createWriteStream("chatbot.pdf");

doc.pipe(stream);

doc.fontSize(12).text(`
Criando um chatbot para vendas em JavaScript:

const express = require("express");
const app = express();

app.use(express.json());

app.post("/chatbot", (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    let botResponse;

    if (userMessage.includes("preço")) {
        botResponse = "Nossos produtos variam de preço. Qual item você está interessado?";
    } else if (userMessage.includes("pagamento")) {
        botResponse = "Aceitamos pagamentos via cartão de crédito, débito e Pix.";
    } else {
        botResponse = "Desculpe, não entendi sua pergunta. Poderia reformular?";
    }

    res.json({ response: botResponse });
});

app.listen(3000, () => {
    console.log("Chatbot rodando na porta 3000");
});
`);

doc.end();

console.log("PDF gerado com sucesso!");

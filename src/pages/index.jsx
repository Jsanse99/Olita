
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    setResponse("Estoy procesando tu pregunta sobre Biología Celular...");
    setTimeout(() => {
      setResponse("(Respuesta simulada de Olita basada en los seminarios y el libro de Cooper)");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-blue-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-2">Estudiá con El Torrente</h1>
      <p className="text-lg text-pink-400 mb-8">Olita te ayuda a estudiar Biología Celular</p>

      <Card className="w-full max-w-xl bg-white text-black mb-6">
        <CardContent className="p-6">
          <p className="text-blue-900 font-semibold mb-2">¡Hola! Soy Olita 🌀</p>
          <p className="text-sm">Preguntame lo que quieras sobre Biología Celular. Estoy entrenada con seminarios, el libro de Cooper y exámenes anteriores.</p>
        </CardContent>
      </Card>

      <div className="w-full max-w-xl flex gap-2">
        <Input
          placeholder="Ej: ¿Qué es el modelo de mosaico fluido?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleAsk}>Preguntar</Button>
      </div>

      {response && (
        <div className="w-full max-w-xl mt-4 bg-white text-black p-4 rounded-xl shadow">
          <p className="text-sm">{response}</p>
        </div>
      )}
    </main>
  );
}

import React, { useState } from "react";
import axios from "axios";

interface StockData {
    symbol: string;
    shortName: string;
    regularMarketPrice: number;
    regularMarketChangePercent: number;
    fiftyTwoWeekHigh: number;
    fiftyTwoWeekLow: number;
}

export default function StockInfo() {
    const [ticker, setTicker] = useState<string>("");
    const [data, setData] = useState<StockData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            // Substitua o token diretamente no código
            const response = await axios.get(
                `https://brapi.dev/api/quote/${ticker.toUpperCase()}?token=wKArMAcKsJNdUFDoi5opCi`
            );
            setData(response.data.results[0]);
        } catch (err) {
            setError("Erro ao buscar dados da ação.");
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Consulta de Ações</h1>

            <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Digite o código da ação (ex: PETR4)"
                className="border p-2 rounded w-full mb-3"
            />

            <button
                onClick={fetchData}
                disabled={loading || ticker.trim() === ""}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
            >
                {loading ? "Buscando..." : "Buscar"}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {data && (
                <div className="mt-6 bg-gray-100 p-4 rounded">
                    <h2 className="text-lg font-semibold">{data.shortName} ({data.symbol})</h2>
                    <p><strong>Preço atual:</strong> R$ {data.regularMarketPrice}</p>
                    <p><strong>Variação:</strong> {data.regularMarketChangePercent.toFixed(2)}%</p>
                    <p><strong>Máxima 52 semanas:</strong> R$ {data.fiftyTwoWeekHigh}</p>
                    <p><strong>Mínima 52 semanas:</strong> R$ {data.fiftyTwoWeekLow}</p>
                </div>
            )}
        </div>
    );
}

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { CoinProps } from "../home";
import styles from './detail.module.css'

interface ResponseData {
    data: CoinProps
}

interface ErrorData {
    error: string
}

type DataProps = ResponseData | ErrorData

export function Detail() {

    const { cripto } = useParams();
    const navigate = useNavigate();

    const [coin, setCoin] = useState<CoinProps>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getCoin() {
            try {
                fetch(`https://rest.coincap.io/v3/assets/${cripto}?apiKey=ed4c4bfb2f9dc7ad8fddc0d1b94296fe93c8a0ec77a6195537fc6f76da2beb82`)
                    .then(response => response.json())
                    .then((data: DataProps) => {
                        if ('error' in data) {
                            navigate('/')
                            return;
                        }

                        const price = Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD"
                        })

                        const priceCompact = Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            notation: "compact"
                        })


                        const resultData = {
                            ...data.data,
                            formatedPrice: price.format(Number(data.data.priceUsd)),
                            formatedMarket: priceCompact.format(Number(data.data.marketCapUsd)),
                            formatedVolume: priceCompact.format(Number(data.data.volumeUsd24Hr))
                        }

                        setCoin(resultData)
                        setLoading(false)
                    })

            } catch (err) {
                console.log(err);
                navigate('/')
            }
        }

        getCoin();
    }, [cripto])

    if (loading || !coin) {
        return (
            <div className={styles.container}>
                <h4 className={styles.center}>Carregando detalhes...</h4>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.center}> {coin?.name}</h1>
            <h1 className={styles.center}> {coin?.symbol}</h1>

            <section className={styles.content}>
                <img
                    src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLowerCase()}@2x.png`}
                    alt="Logo moeda"
                    className={styles.logo}
                />

                <h1>{coin?.name} | {coin?.symbol}</h1>

                <p><strong>Preço:</strong> {coin?.formatedPrice}</p>

                <a>
                    <strong>Mercado: {coin?.formatedMarket}</strong>
                </a>

                <a>
                    <strong>Volume: {coin?.formatedVolume}</strong>
                </a>

                <a>
                    <strong>Mudança 24h:</strong> <span className={Number(coin?.changePercent24Hr) > 0 ? styles.profit : styles.loss}>{Number(coin?.changePercent24Hr).toFixed(2)}</span>
                </a>
            </section>
        </div >
    )
}

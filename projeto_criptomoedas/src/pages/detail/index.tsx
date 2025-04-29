import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { CoinProps } from "../home";

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
                    })

            } catch (err) {
                console.log(err);
                navigate('/')
            }
        }

        getCoin();
    }, [cripto])

    return (
        <div>
            <h1>Pagina Detalhes da moeda {cripto}</h1>
        </div>
    )
}

const axios = require('axios');

const url = `https://www.nseindia.com/api/market-data-pre-open?key=ALL`

// Need to fix this axios request
// Currently update this from https://www.nseindia.com/market-data/pre-open-market-cm-and-emerge-market
const getMarketData = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://www.nseindia.com/api/market-data-pre-open', {
            params: {
                'key': 'ALL'
            },
            headers: {
                'authority': 'www.nseindia.com',
                'accept': '*/*',
                'accept-language': 'en-GB,en;q=0.9',
                'Accept-Encoding': 'application/json',
                'cookie': 'ak_bmsc=9C4DD813009ED388601FB29FABF28EFB~000000000000000000000000000000~YAAQjbYRYE3SSKiEAQAAqiZg3hJWABxqoklsR4wkdsoVRbiGYQks8hWpAn+kgF81qWivJO46/jKoqNlF11h0RWRg4exQ/WLTpGdEMiu8FFJ45SBGX49dEnSv6xQsO9OS1vkAnpTSdk9B8sUddrBoahRI00WG497NlEoIFfBvBkpDDObBJ2jHNgVR93TIzHRZMTkFqJpkLsOBl+TqHh1t/AvPsQXTrhrCcTI0XBmTsUmn1YMiR8iygpoHPBDQ9U1cOlvcNJMlr8RNpWq5wjNg+JGuiLayUuGCvOw3owIpeAZe8xXRoQGrII+8VVJ5vGgW1MV0qaEJd5HGjADpqtUTRUDpw3lsaP1Xnh94AS/cIVQHDW5aQ6UCSMxdx6AXsyU2hSABWCNvCGuU7EFok8WDmBhCh9m0nEdZLgNt835d6iT0k23+42Z/1vZVR89wbLGc6vmRPTzUzxPTxrmajya/74zRHd8K/dz7Z3dffH6r42IEplhEezVcIB8xuMAuzA==; nsit=JaurO8Io1GMMnikYHhEHeP5t; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY3MDE4MTgxNSwiZXhwIjoxNjcwMTg1NDE1fQ.QInaTloJnlxODmHX6Dc7uhSHkv1OEGjlgNf7oxiFO4s; AKA_A2=A; bm_sv=4FE0A182BBD2D133894AB8D68A3FA156~YAAQjbYRYMrRSqiEAQAAOBeY3hI3njdRq3uNq9n8AtXLQi1UdkFsNUv335MkuaVPvPHkbageFAa4Bj5+XUPLhpinfZfNJKJG/XhBugrgeaOxRakoWSJ3Y/+Vr95xk+dDXWEW5WCA+kcvRfiZ8URJkwp3FGWhXHN+SKm/K7yDLUdlqiiJKB2dnH2cjYR+aHr49IOG/UKwKws0sFGvOhEjsdbegdpoaEb6Ral1+EBGGqjqY+fZ4RTW+kPfbAgLxC8CL1YU~1',
                'referer': 'https://www.nseindia.com/market-data/pre-open-market-cm-and-emerge-market',
                'sec-ch-ua': '"Brave";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'sec-gpc': '1',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
            }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            console.error("Failed to get stock data")
            reject(error);
        })
    })
}

module.exports = getMarketData
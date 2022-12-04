const axios = require('axios');

const url = `https://www.nseindia.com/api/market-data-pre-open?key=ALL`

// Need to fix this axios request
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
                'referer': 'https://www.nseindia.com/market-data/pre-open-market-cm-and-emerge-market',
                'cookie': 'bm_mi=9D73037595BC6C4808E0CEA6A0E92A94~YAAQjbYRYGXtQaiEAQAAEPnn3RK1CSPMTzvn+mEO6dDATi+I/96CslYNFky6bhuuso5Fd0qdjuGfI/02pUlISgms9ZcLrpPtwmrce9Hufu7DdIDoMPT2BJhLyNDZWIVLcJB0FLbK6Gqr2Pst9GVKLbTdNtBIWkFM7ounNYn9d40Gh4olN2qoikLRWXroBl5Afbx8LaDJfOOlla8NSbFog54lgGtxqITJGW2nEQNalXoeb9yNOpe2FlNlQ/4qVxTKLnX8OUEXsVMXzLJEZNGZ63JmxhjWv6TjpQ0EMQxNOJtwzAoOWuF+XCXEOsePPU7D~1; ak_bmsc=6B2888320FA253A90F4E050A29A3F5D3~000000000000000000000000000000~YAAQjbYRYBLuQaiEAQAARgXo3RIlwaJoyLk8tiV3fWVVykOI4BJdw819DrgzCwiW3TG1uRngm2ftAc0ZkeclNCoiF7npe0Q7yWAKGYBelMvsbbO/QcvZ6YSbltwdY2Bdq//n3TtdJUu/j0uyXugjMlXYgxSiCTFCLo7flJWRw2iV7JBMkrlpRHjMSSRuCnszSg0zemdSJpvJQSyiZijMiBdWzhxHer45cDpKPooi576fBHSQXiWiq+Oma5xF5eSEJaAVMlbhEqWzMO0sTZ66i+3p97T4HP/VMarKmJpDDlmxUpExDx74iCsX3wOOHP+CfJRM8Ks9ppl8rdTF4Een35DVhydqBcprmZKmevqVNIJL6sFW1kEEP2pecuMgizS1rMVKi2C64lgMFKbYwduLjiHjniO1prnL/KqnU54JK2zXFJPfBM3LAY0OZj/misXPHfq6Tj/vl5brh+hmGEs8YSkVJL23CpuFleACyiwJ/RstEgUcLFThyeSY7gj4VdEtnQkD5w==; nsit=ATO8ur_V-_CUPyUgNvopmYwi; AKA_A2=A; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY3MDE3NTA3NiwiZXhwIjoxNjcwMTc4Njc2fQ.3kpP22SgcbuTJfx1IGVONuJRH8IctxyRpW8ZP2msTLM; bm_sv=E94087A623BF71FFFA3ADEC70C344819~YAAQjbYRYGpoRaiEAQAAbEgx3hLtEToxcX9bziFUnX1uI/4lFkoydBM9Z27OlnkapwIbMSUW6099BeWewV3NzxPE0bhPBTyyCPmWUvBS+85Opo9W1Rru9ggh3JAMrcDHmtUVBrbIfOVNsgxgB3e8vnkPc6SjaXgB9x9Oy15FdEhfnuh5C/ZABESNguK1MMbsUZ8RRoo41blHqxqW94cURDL0XPIIpfP7E8gv5g2Yj+Sm7SnK9RstJ3jUP7SLSOVcJqD6~1',
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
            reject(error);
        })
    })
}

module.exports = getMarketData
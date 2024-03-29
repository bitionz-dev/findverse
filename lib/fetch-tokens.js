export async function loadTokens() {
    try {
        const myHeaders = new Headers();
        myHeaders.append("X-CMC_PRO_API_KEY", process.env.SK);

        const requestOptions = {
            method: 'GET', headers: myHeaders, redirect: 'follow'
        };

        const response = await fetch(`${process.env.SU}/v1/cryptocurrency/category?id=6053dfb66be1bf5c15e865ee`, requestOptions)
        return await response.json()
    } catch (err) {
        return err
    }
}
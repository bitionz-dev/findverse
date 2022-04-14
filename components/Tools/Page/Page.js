import Head from "next/head";
import Script from "next/script";

export default function Page({title, meta, bootstrap, email = false}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={meta.name} content={meta.content}/>
                {bootstrap && <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />}
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {bootstrap && <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></Script>}

            {bootstrap &&
                <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin></Script>}

            {bootstrap &&
                <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin></Script>}
            {email && <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>}
        </>
    )

}
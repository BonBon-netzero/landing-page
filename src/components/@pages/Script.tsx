import Script from 'next/script'

export default function PageScript() {
  return (
    <>
      <Script defer src="https://www.googletagmanager.com/gtag/js?id=" />
      <Script defer id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '')
        `}
      </Script>
    </>
  )
}

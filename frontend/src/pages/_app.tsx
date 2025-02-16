import "@styles/globals.css";
import { AppProps } from "next/app";
import i18n from "@config/i18n";
import { I18nextProvider } from "react-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </>
  );
}

export default MyApp;

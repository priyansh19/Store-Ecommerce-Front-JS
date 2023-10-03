import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body{
    padding: 0;
    margin: 0; 
    font-family: 'Mooli', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

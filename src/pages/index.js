import { ThemeProvider } from "styled-components";
import HeadIndex from '@component/components/Head'
import Header from '@component/components/Header/Header'
import Theme, {lightTheme, darkTheme} from "@component/components/stylings/Theme";
import GlobalStyle from '@component/components/stylings/globalStyles';
import { Fragment } from 'react';
import {BrowserRouter} from "react-router-dom";
import RoutePage from '@component/components/RoutesInPage';
import { useMode } from '@component/components/stylings/useMode';
import { FrontendContextProvider } from "@component/components/Context/Frontend.Context";
import { ArtContextProvider } from "@component/components/Context/Art.Context";

export default function Home() {
  const [theme, themeToggler, mountedComponent] = useMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <Fragment>
    <HeadIndex/>
    <ArtContextProvider>
      <FrontendContextProvider>
    <Theme>
    <ThemeProvider theme={themeMode}>
    <GlobalStyle/>
    <BrowserRouter>
    <Header
    theme={theme}
    toggleTheme={themeToggler}/>
      <main className="main">
      <RoutePage
      theme={theme}
      toggleTheme={themeToggler}
      />
      {/* <Homepage/> */}
      </main>
      </BrowserRouter>
      </ThemeProvider>
      </Theme>
      </FrontendContextProvider>
    </ArtContextProvider>
    </Fragment>
  )
}

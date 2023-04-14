import GlobalStyle from '@component/components/stylings/globalStyles';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import HeadIndex, { HeadTypography } from '@component/components/Head';
import Header from '@component/components/Header/Header';
import Theme, {lightTheme, darkTheme} from '@component/components/stylings/Theme';
import { useMode } from '@component/components/stylings/useMode';
import AppProvider from '@component/context/AppContext';
import { appWithTranslation } from 'next-i18next';
import NextNProgress from "nextjs-progressbar"

const App = ({ Component, pageProps}) =>{
  const [theme, themeToggler, mountedComponent] = useMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>

  return (
    <Fragment>
   
    <Theme>
    <ThemeProvider theme={themeMode}>
    <GlobalStyle/>
    <AppProvider>
      <NextNProgress></NextNProgress>
    <Header
    theme={theme}
    toggleTheme={themeToggler}/>
    <Component {...pageProps} />
    </AppProvider>
    </ThemeProvider>
    </Theme>
    </Fragment>)
}

export default appWithTranslation(App)
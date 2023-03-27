import GlobalStyle from '@component/components/stylings/globalStyles';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import HeadIndex from '@component/components/Head';
import Header from '@component/components/Header/Header';
import Theme, {lightTheme, darkTheme} from '@component/components/stylings/Theme';
import { useMode } from '@component/components/stylings/useMode';
import AppProvider from '@component/context/AppContext';

export default function App({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <Fragment>
    <HeadIndex/>
    <Theme>
    <ThemeProvider theme={themeMode}>
    <GlobalStyle/>
    <AppProvider>
    <Header
    theme={theme}
    toggleTheme={themeToggler}/>
    <Component {...pageProps} />
    </AppProvider>
    </ThemeProvider>
    </Theme>
    </Fragment>)
}

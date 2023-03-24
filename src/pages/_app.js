import '@component/styles/globals.scss'
import GlobalStyle from '@component/components/stylings/globalStyles';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import HeadIndex from '@component/components/Head';
import Header from '@component/components/Header/Header';
import Theme, {lightTheme, darkTheme} from '@component/components/stylings/Theme';


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
    <Header
    theme={theme}
    toggleTheme={themeToggler}/>
    <Component {...pageProps} />
    </ThemeProvider>
    </Theme>
    </Fragment>)
}

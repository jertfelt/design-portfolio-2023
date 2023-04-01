import {serverSideTranslations} from "next-i18next/serverSideTranslations"


export async function getStaticProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

const withTranslation = (Component) => {
  const wrappedComponent = props => (
    <>
    <Component {...props}/>
    </>
  )
  return wrappedComponent;
}

export default withTranslation;
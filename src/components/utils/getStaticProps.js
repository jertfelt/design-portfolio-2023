export async function getStaticProps({ locale }) {
  const { serverSideTranslations } =
    await import("next-i18next/serverSideTranslations");

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

const withTranslation = (Component) => {
  const wrappedComponent = (props) => (
    <>
      <Component {...props} />
    </>
  );
  return wrappedComponent;
};

export default withTranslation;

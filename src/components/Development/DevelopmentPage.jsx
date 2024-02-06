import { useRouter } from "next/router";
import styled from "styled-components";

const DevelopmentPage = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const language = activeLocale;

  return <>hejhej</>;
};
export default DevelopmentPage;

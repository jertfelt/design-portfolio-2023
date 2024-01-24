import { useRouter } from "next/router";
import styled from "styled-components";

import AboutPage from "./AboutPage";
import HeroDev from "./HeroDev";
import { QuotesOne } from "./Quotes";
import WorkPage from "./WorkPage";

const DevelopmentSection = styled.section`
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.frontendnew.backgroundlinear};
`;

const DevContentPadding = styled.div`
  padding-top: 10vh;
  width: 100vw;
  max-width: 100%;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.padding.s};
  padding-top: 0;
`;

const Circle = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
`;

const AboutPageWrapper = styled.div`
  z-index: 2;
  clip-path: circle(60%);
  padding: 2rem;
  padding-top: 10rem;
  padding-bottom: 8rem;
  background-color: ${({ theme }) => theme.frontendnew.backgroundone};
`;

const WorkPageWrapper = styled.div`
  z-index: 2;
  clip-path: polygon(
    calc(100% - 28.5px) calc(100% - 0.90000000000001px),
    32.2px calc(100% - 0.90000000000001px),
    32.2px calc(100% - 0.90000000000001px),
    26.973px calc(100% - 1.321px),
    22.016px calc(100% - 2.54px),
    17.395px calc(100% - 4.491px),
    13.176px calc(100% - 7.108px),
    9.425px calc(100% - 10.325px),
    6.208px calc(100% - 14.076px),
    3.591px calc(100% - 18.295px),
    1.64px calc(100% - 22.916px),
    0.421px calc(100% - 27.873px),
    5.3248111102418e-31px calc(100% - 33.1px),
    0px 87.4px,
    0px 87.4px,
    0.1942px 84.5609px,
    0.7616px 81.8232px,
    1.6794px 79.2163px,
    2.9248px 76.7696px,
    4.475px 74.5125px,
    6.3072px 72.4744px,
    8.3986px 70.6847px,
    10.7264px 69.1728px,
    13.2678px 67.9681px,
    16px 67.1px,
    calc(100% - 30.8px) 0.700002px,
    calc(100% - 30.8px) 0.700002px,
    calc(100% - 26.1225px) 0.019601458px,
    calc(100% - 21.568px) 0.212801024px,
    calc(100% - 17.2235px) 1.211200686px,
    calc(100% - 13.176px) 2.946400432px,
    calc(100% - 9.5125px) 5.35000025px,
    calc(100% - 6.3200000000001px) 8.353600128px,
    calc(100% - 3.6855px) 11.888800054px,
    calc(100% - 1.696px) 15.887200016px,
    calc(100% - 0.43850000000003px) 20.280400002px,
    calc(100% - 5.6843418860808e-14px) 25px,
    calc(100% - 0px) calc(100% - 29.4px),
    calc(100% - 0px) calc(100% - 29.4px),
    calc(100% - 0.37139999999999px) calc(100% - 24.7869px),
    calc(100% - 1.4471999999999px) calc(100% - 20.4072px),
    calc(100% - 3.1698px) calc(100% - 16.3203px),
    calc(100% - 5.4816px) calc(100% - 12.5856px),
    calc(100% - 8.325px) calc(100% - 9.2625px),
    calc(100% - 11.6424px) calc(100% - 6.4104px),
    calc(100% - 15.3762px) calc(100% - 4.0887px),
    calc(100% - 19.4688px) calc(100% - 2.3568px),
    calc(100% - 23.8626px) calc(100% - 1.2741px),
    calc(100% - 28.5px) calc(100% - 0.90000000000001px)
  );
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 100px #d03fee inset,
      0px 10px 10px 10px rgba(254, 107, 22, 0.2) inset;
    z-index: -1;
  }

  padding: 2rem;
  padding-top: 10rem;
  padding-bottom: 8rem;
  background-color: ${({ theme }) => theme.frontendnew.backgroundone};
  min-height: 900px;
`;

const DevelopmentPage = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const language = activeLocale;

  return (
    <>
      <DevelopmentSection>
        <DevContentPadding>
          <Content>
            <HeroDev />
          </Content>
          <Circle>
            <AboutPageWrapper>
              <AboutPage />
            </AboutPageWrapper>
          </Circle>
          <QuotesOne />
          <Circle>
            <WorkPageWrapper>
              <WorkPage />
            </WorkPageWrapper>
          </Circle>
        </DevContentPadding>
      </DevelopmentSection>
    </>
  );
};
export default DevelopmentPage;

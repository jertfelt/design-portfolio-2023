import { AppContext } from "@component/context/AppContext";
import { ColumnMenu } from "./Start";

import { useContext } from "react";

import { DynamicLinkToOtherPages } from "./DynamicLinks";

const ArtMenu = ({ setOpen, open }) => {
  const { setSelectedPage } = useContext(AppContext);
  return (
    <ColumnMenu>
      <p>&#9733;</p>
      <DynamicLinkToOtherPages setOpen={setOpen} open={open} />
      <p>&#9733;</p>
    </ColumnMenu>
  );
};

export default ArtMenu;

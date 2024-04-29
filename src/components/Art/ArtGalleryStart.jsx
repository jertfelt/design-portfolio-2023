import { useRouter } from "next/router";
import paradiset from "../../../public/art/rusmus_materialdisplay_tovajertfelt.jpg";
import fire from "../../../public/art/fire-color-jertfelt copy.png";
import survivor from "../../../public/art/survivor-tova-jertfelt.jpg";
import STPLN from "../../../public/art/STPLN-tova-jertfelt.png";
import ursakta2 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt-2.png";
import viKan from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack--2.png";
import river from "../../../public/art/river-webb-1-tova.png";
import notBedbug from "../../../public/art/notlikea-bedbug--mal-tovajertfelt-2021--6.png";
import dream from "../../../public/art/dreams-tova-jertfelt.png";
import labyrinth from "../../../public/art/tova_labyrint-2.jpg";
import {
  ImgFirstRow,
  ImgContainerFirstRow,
  ThirdRow,
  ArticleFirstRow,
} from "../Illustration/IllustrationGrid";

const ArtGalleryStart = ({ lang }) => {
  return (
    <>
      <ThirdRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A coffin made out of collage in a room with red threads"
                  : "En kista gjord av collage i ett rum med röda trådar"
              }
              src={labyrinth}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A digital painting depicting people dancing in heaven."
                  : "En digital målning föreställandes människor som dansar i himmelen."
              }
              src={dream}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
      </ThirdRow>

      <ThirdRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A portrait in ink with a man missing his eyes"
                  : "Ett tuschporträtt där en man saknar sina ögon"
              }
              src={survivor}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "The same sign out in a park, where it's sunny."
                  : "Samma skylt ute i solen."
              }
              src={ursakta2}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
      </ThirdRow>
      <ThirdRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A close-up of a litography, a riverbend"
                  : "En närbild på en litografi som föreställer en krökt flod."
              }
              src={river}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A comic saying 'Not in a fire or in an ocean. Not full of fear.' In the background you can see Utoya, Estonia and the 9/11 attack."
                  : "Utdrag ur en sida från en serie. Det står handstil 'Inte i en eld eller ett hav. Inte full av rädsla.' I bakgrunden är det ritat Estonia, 9/11-attacken och Utoya."
              }
              src={notBedbug}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
      </ThirdRow>
      <ThirdRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A corridor filled with pictures and graffiti with insults and bullying testimonies."
                  : "En korridor fylld med bilder och graffitti där det står förolämpningar och vittnesmål från mobbning."
              }
              src={viKan}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A sign on a window, big white 'M' with a lot of female names written on them. In the middle of it stands Tova."
                  : "Ett skyltfönster med ett stort vitt 'M', och i M:et står det en massa kvinnonamn. Under M:et står Tova."
              }
              src={STPLN}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
      </ThirdRow>
      <ThirdRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A boy is watching a wooden painting made out of graffiti and wooden carvings"
                  : "En pojke tittar på en triptyk, tre meter bred, med graffiti och träsnitt."
              }
              src={paradiset}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
        <ArticleFirstRow>
          <ImgContainerFirstRow>
            <ImgFirstRow
              alt={
                lang === "en"
                  ? "A digital painting about burning up"
                  : "En digital målning där en kvinna brinner upp"
              }
              src={fire}
              quality={100}
            />
          </ImgContainerFirstRow>
        </ArticleFirstRow>
      </ThirdRow>
    </>
  );
};

export default ArtGalleryStart;

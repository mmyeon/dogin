import Card from "@/pages/Quiz/Card";
import TitleWithBubble from "@/shared/ui/TitleWithBubble";
import { List, ListItem, Title } from "./Styled";
import {
  contentReferenceList,
  iconReferenceList,
} from "@/entities/quiz/referenceData";

export default function Reference() {
  return (
    <Card borderType="special">
      <TitleWithBubble title={"출처"} />

      <section className="upper-section">
        <Title>콘텐츠 출처</Title>
        <List>
          {contentReferenceList.map((reference, i) => (
            <ListItem key={i.toString()}>
              👉{" "}
              {reference.link ? (
                <a href={reference.link} target="_blank" rel="noreferrer">
                  {reference.title}
                </a>
              ) : (
                reference.title
              )}
            </ListItem>
          ))}
        </List>
      </section>

      <section className="lower-section">
        <Title>아이콘 출처</Title>
        <List>
          {iconReferenceList.map((reference, i) => (
            <ListItem key={i.toString()}>
              👉 Icons made by{" "}
              {
                <a href={reference.link} title={reference.title}>
                  {reference.title}
                </a>
              }{" "}
              from{" "}
              {
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              }
            </ListItem>
          ))}
        </List>
      </section>
    </Card>
  );
}

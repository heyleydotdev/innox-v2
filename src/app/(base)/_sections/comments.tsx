import {
  Comments,
  CommentsContainer,
} from "~/app/(base)/_components/comments-card";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionSeparator,
  SectionTitle,
} from "~/app/(base)/_components/section";
import { config_comments } from "~/lib/configs/comments";

export const CommentsSection: React.FC = () => {
  return (
    <Section>
      <SectionSeparator section="Comments" count="06" total="09" />
      <SectionContainer>
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Trusted by People Like You</SectionTitle>
            <SectionDescription>
              We’ve worked with some amazing people, and we’re proud of the
              results. Here’s how they felt about the journey.
            </SectionDescription>
          </SectionHeader>
        </SectionContent>
        <CommentsContainer>
          <Comments init_comments={config_comments.slice(0, 6)} />
        </CommentsContainer>
      </SectionContainer>
    </Section>
  );
};

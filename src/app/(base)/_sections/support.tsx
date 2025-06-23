import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionSeparator,
  SectionTitle,
} from "~/app/(base)/_components/section";

export const SupportSection: React.FC = () => {
  return (
    <Section>
      <SectionSeparator section="SUPPORT" count="07" total="09" />

      <SectionContainer>
        <SectionContent>
          <SectionHeader>
            <SectionTitle>We’re Just a Click Away</SectionTitle>
            <SectionDescription>
              Stuck on something or not sure where to start? Send us a message,
              we’ll get back to you soon.
            </SectionDescription>
          </SectionHeader>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
};

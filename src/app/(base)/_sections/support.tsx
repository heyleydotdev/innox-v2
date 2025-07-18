import {
  Contact,
  ContactButton,
  ContactContent,
  ContactDescription,
  ContactIcon,
  ContactTitle,
} from "~/app/(base)/_components/contact-card";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionSeparator,
  SectionTitle,
} from "~/app/(base)/_components/section";
import { Icons } from "~/components/icons";

export const SupportSection: React.FC = () => {
  return (
    <Section id="support">
      <SectionSeparator title="Support" />
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
        <div className="relative grid grid-cols-1 gap-10 border-t py-16">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-3 justify-items-end border-x border-transparent bg-stone-50">
            <div className="bg-dashed-vert absolute inset-y-0 -left-px w-px" />
            <div className="bg-dashed-vert h-full w-px" />
            <div className="bg-dashed-vert h-full w-px" />
            <div className="bg-dashed-vert -mr-px h-full w-px" />
          </div>

          <div className="relative grid grid-cols-1 border bg-white max-md:divide-y md:grid-cols-3 md:divide-x">
            <Contact>
              <ContactIcon>
                <Icons.instagram_text />
              </ContactIcon>
              <ContactContent>
                <ContactTitle>Follow us on Instagram.</ContactTitle>
                <ContactDescription>
                  Stay updated with our newest work, announcements, and what
                  we’re working on next.
                </ContactDescription>
              </ContactContent>
              <ContactButton href="https://www.instagram.com/_innox_pro_/">
                Follow @_innox_pro_
              </ContactButton>
            </Contact>
            <Contact>
              <ContactIcon>
                <Icons.discord />
              </ContactIcon>
              <ContactContent>
                <ContactTitle>Join our Discord community.</ContactTitle>
                <ContactDescription>
                  Connect with others, share feedback, and stay in the loop.
                </ContactDescription>
              </ContactContent>
              <ContactButton href="https://discord.gg/VMRr9RksdH">
                Join our Community
              </ContactButton>
            </Contact>
            <Contact>
              <ContactIcon>
                <Icons.telegram />
              </ContactIcon>
              <ContactContent>
                <ContactTitle>Need quick support?</ContactTitle>
                <ContactDescription>
                  Message us on Telegram and we’ll get back to you as soon as
                  possible.
                </ContactDescription>
              </ContactContent>
              <ContactButton href="https://t.me/INNOXOFFICIAL">
                Get Quick Support
              </ContactButton>
            </Contact>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};

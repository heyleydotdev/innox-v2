import {
  SectionContainer,
  SectionContent,
  SectionSeparator,
} from "~/app/(base)/_components/section";
import { LogoStroke, LogoTextStroke } from "~/components/logo";

export const BaseFooter: React.FC = () => {
  return (
    <footer className="border-t">
      <SectionSeparator title="Footer" className="[&>div]:border-t-0" />
      <SectionContainer>
        <SectionContent className="divide-y">
          <div className="py-8">
            <p className="text-center text-sm/6 text-stone-500">
              © {new Date().getFullYear()} Innox Digital Agency. All rights
              reserved.
            </p>
          </div>
          <div className="-mb-36 pt-16 md:-mb-10">
            <div className="mask-b-from-30% mask-b-to-90% text-black/15">
              <LogoStroke className="mx-auto h-auto w-[90%] md:hidden" />
              <LogoTextStroke className="mx-auto h-auto w-full max-md:hidden lg:w-[90%]" />
            </div>
          </div>
        </SectionContent>
      </SectionContainer>
    </footer>
  );
};

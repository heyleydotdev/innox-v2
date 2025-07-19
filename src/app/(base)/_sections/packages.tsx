import {
  Package,
  PackageAmount,
  PackageButton,
  PackageDescription,
  PackageDuration,
  PackageFeature,
  PackageFeatureDescription,
  PackageFeatures,
  PackageFeatureTitle,
  PackageHeader,
  PackageIcon,
  PackagePricing,
  PackagesContainer,
  PackageTitle,
} from "~/app/(base)/_components/package-card";
import { PackageDialog } from "~/app/(base)/_components/package-dialog";
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
import { config_packages, ConfigPackageTitles } from "~/lib/configs/packages";

export const PackagesSection: React.FC = () => {
  return (
    <Section id="packages">
      <SectionSeparator title="Packages" />
      <SectionContainer>
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Choose What Works for You</SectionTitle>
            <SectionDescription>
              We keep it clear and flexible. Find the right plan for your
              project, and let’s build something great together.
            </SectionDescription>
          </SectionHeader>
        </SectionContent>
      </SectionContainer>
      <PackagesContainer>
        {config_packages.map((p, index) => (
          <Package key={index}>
            <PackageIcon icon={p.icon} />
            <PackageHeader>
              <PackageTitle>{ConfigPackageTitles[p.name]}</PackageTitle>
              <PackageDescription>{p.tagline}</PackageDescription>
            </PackageHeader>
            <PackagePricing>
              <PackageAmount>{p.price}</PackageAmount>
              <PackageDuration>{p.duration}</PackageDuration>
            </PackagePricing>
            <PackageDialog package_key={p.name} asChild>
              <PackageButton>
                Continue with {ConfigPackageTitles[p.name]}
              </PackageButton>
            </PackageDialog>
            <PackageFeatures>
              {p.features.map((f, subindex) => (
                <PackageFeature key={subindex}>
                  <PackageFeatureTitle>{f.title}</PackageFeatureTitle>
                  <PackageFeatureDescription>
                    {f.description}
                  </PackageFeatureDescription>
                </PackageFeature>
              ))}
            </PackageFeatures>
          </Package>
        ))}
      </PackagesContainer>
      <SectionContainer className="lg:hidden">
        <SectionContent className="py-3.5">
          <p className="flex items-center justify-center gap-2 text-[0.8rem]/6 text-stone-600">
            <Icons.swipe className="size-4" /> Swipe left or right for more
          </p>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
};

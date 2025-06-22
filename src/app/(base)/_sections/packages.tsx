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
  PackagePricing,
  PackagesContainer,
  PackageTitle,
} from "~/app/(base)/_components/package-card";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionSeparator,
  SectionTitle,
} from "~/app/(base)/_components/section";
import { config_packages } from "~/lib/configs/packages";

export const PackagesSection: React.FC = () => {
  return (
    <Section>
      <SectionSeparator count="05" total="09" section="PACKAGES" />
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
            <PackageHeader>
              <PackageTitle>{p.name}</PackageTitle>
              <PackageDescription>{p.tagline}</PackageDescription>
            </PackageHeader>
            <PackagePricing>
              <PackageAmount>{p.price}</PackageAmount>
              {p.duration && <PackageDuration>{p.duration}</PackageDuration>}
            </PackagePricing>
            <PackageButton>Continue with {p.name}</PackageButton>
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
    </Section>
  );
};

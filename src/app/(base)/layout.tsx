import { BaseFooter } from "~/app/(base)/_components/footer";
import { BaseHeader } from "~/app/(base)/_components/header";
import { SectionsProvider } from "~/app/(base)/_components/section";

export default function BaseLayout({ children }: React.PropsWithChildren) {
  return (
    <SectionsProvider>
      <div className="isolate flex min-h-full flex-col">
        <BaseHeader />
        <main className="isolate flex-1">{children}</main>
        <BaseFooter />
      </div>
    </SectionsProvider>
  );
}

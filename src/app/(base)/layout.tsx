import { BaseFooter } from "~/app/(base)/_components/footer";
import { BaseHeader } from "~/app/(base)/_components/header";

export default function BaseLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="isolate flex min-h-full flex-col">
      <BaseHeader />
      <main className="isolate flex-1">{children}</main>
      <BaseFooter />
    </div>
  );
}

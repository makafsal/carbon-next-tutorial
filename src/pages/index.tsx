import { AppHeader } from "@/components/AppHeader";
import { Content, Theme } from "@carbon/react";

export default function Home() {
  return (
    <>
      <Theme theme="g100">
        <AppHeader></AppHeader>
      </Theme>
      <Content>Helloo</Content>
    </>
  );
}

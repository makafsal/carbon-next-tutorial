"use client";
import { Content, Theme } from "@carbon/react";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import { LandingPage } from "./LandingPage";

export default function Home() {
  return (
    <>
      <Theme theme="g100">
        <AppHeader></AppHeader>
      </Theme>
      <Content>
        <LandingPage />
      </Content>
    </>
  );
}

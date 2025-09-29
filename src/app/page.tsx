"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import RevealFooter from '@/components/sections/layouts/footer/RevealFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-m-1759142440705-e553bde8.jpg"
          logoAlt="MemePulse Logo"
          buttonText="Buy MemePulse"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SimpleHero
          title="Welcome to MemePulse"
          description="The playful memecoin of your dreams!"
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759142432550-6b29b95e.jpg"
          backgroundImageAlt="Desert landscape background"
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Join the Movement"
          descriptions={["MemePulse is more than just a token; it's a community!", "Get involved and start contributing to our memecoin journey.", "Follow us on social media to stay updated!"]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is MemePulse?", content: "MemePulse is a fun memecoin designed for community engagement and excitement!" },
            { title: "How do I buy MemePulse?", content: "You can buy MemePulse through various exchanges directly on our site!" },
            { title: "Is there a roadmap?", content: "Yes, we have an outlined roadmap for future developments and expansions." },
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: "left", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759142434672-41e03abc.jpg", title: "Step 1: Create Wallet", description: "Set up a wallet that supports MemePulse!" },
            { position: "center", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759142436243-e898877a.jpg", title: "Step 2: Fund Your Wallet", description: "Add funds to your wallet to buy MemePulse!" },
            { position: "right", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759142437925-3b8a6f6f.jpg", title: "Step 3: Buy MemePulse", description: "Complete the transaction on our site!" },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Here are the key stats behind MemePulse:"
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000 MemePulse Tokens" },
            { id: 2, title: "Community Fund", description: "40% allocated for community growth" },
            { id: 3, title: "Liquidity", description: "20% reserved for liquidity" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <RevealFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-m-1759142440705-e553bde8.jpg"
          logoAlt="MemePulse Logo"
          columns={[
            { title: "Community", items: [ { label: "Discord", onClick: () => {} }, { label: "Twitter", onClick: () => {} }, { label: "Telegram", onClick: () => {} } ] },
            { title: "Useful Links", items: [ { label: "White Paper", onClick: () => {} }, { label: "How to Buy", onClick: () => {} }, { label: "FAQs", onClick: () => {} } ] },
            { title: "Support", items: [ { label: "Contact Us", onClick: () => {} }, { label: "Privacy Policy", onClick: () => {} } ] },
          ]}
          copyrightText="© 2023 MemePulse. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}
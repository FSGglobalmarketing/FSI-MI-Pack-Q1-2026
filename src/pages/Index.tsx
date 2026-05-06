import ReportNav from "@/components/report/ReportNav";
import HeroSection from "@/components/report/HeroSection";
import GlobalFocus from "@/components/report/GlobalFocus";
import PerformanceResults from "@/components/report/PerformanceResults";
import SalesforceSection from "@/components/report/SalesforceSection";
import SearchVisibility from "@/components/report/SearchVisibility";
import HighlightSection from "@/components/report/HighlightSection";
import Highlight1Creative from "@/components/report/Highlight1Creative";
import AlwaysOnSection from "@/components/report/AlwaysOnSection";
import LinkedInSection from "@/components/report/LinkedInSection";
import EventsSection from "@/components/report/EventsSection";
import { reportData } from "@/data/igneo-report";
const fsiLogo = import.meta.env.BASE_URL + "brand/fsi-logo-white-green.svg";

const Index = () => {
  const d = reportData;
  return (
    <div className="min-h-screen bg-background">
      <ReportNav />
      <HeroSection />
      <GlobalFocus />

      {d.highlights.map((h) => (
        <HighlightSection
          key={h.id}
          highlight={h}
          creative={h.id === "highlight-aeq-reporting" ? <Highlight1Creative /> : undefined}
        />
      ))}

      <SearchVisibility />

      <AlwaysOnSection
        id="website"
        title={d.website.title}
        stage={d.website.stage}
        subtitle={d.website.subtitle}
        description={d.website.description}
        kpis={d.website.kpis}
        focusQ4={d.website.focusQ4}
        focusQ1={d.website.focusQ1}
        variant="cream"
        gaMonthly={d.website.gaMonthly}
        topPages={d.website.topPages}
        trafficSources={d.website.trafficSources}
      />

      <LinkedInSection />
      <SalesforceSection />
      <EventsSection />
      <PerformanceResults />

      <footer className="section-dark py-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <img src={fsiLogo} alt="First Sentier Investors" className="h-8 opacity-90" />
          <p className="text-xs text-muted-foreground">{d.quarter} Marketing Impact Report · Internal Use</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

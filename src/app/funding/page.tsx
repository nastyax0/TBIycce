import IframeViewer from "@/components/iframeviewer";

export default function FundingPage() {
  return (
    <main className="bg-[#1a1f29] min-h-screen text-white">
      <IframeViewer
        src="/files/funding.pdf"
        title="Funding Opportunities"
        downloadLink="/files/funding.pdf"
      />
    </main>
  );
}

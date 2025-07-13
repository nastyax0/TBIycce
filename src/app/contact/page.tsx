import IframeViewer from "@/components/iframeviewer";

export default function FundingPage() {
  return (
    <main className="bg-[#1a1f29] min-h-screen text-white">
      <IframeViewer
        src="/files/contact.pdf"
        title="Contact Form"
        downloadLink="/files/funding.pdf"
      />
    </main>
  );
}

export default function QRCodePage() {
  const qrImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028321113/WXfqbmEdfTP5Q6VjGBduAb/ars-qr-code-SZnMcYUvu5wXyMk9nUSvmu.webp';
  const logoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028321113/WXfqbmEdfTP5Q6VjGBduAb/ars-logo-realistic-irGmxLP5PRn5z4ckxxAv47.webp';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header com Logo */}
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <img
              src={logoUrl}
              alt="ARS Logo"
              className="w-24 h-24"
            />
          </div>
          <p className="text-muted-foreground font-light tracking-wide mb-2">Menu Digital</p>
          <p className="text-xs text-muted-foreground font-light">Compromisso, Rigor e Excelência</p>
        </div>

        {/* QR Code Container */}
        <div className="bg-card border border-border/30 rounded-none p-8 mb-8 flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-6 text-center font-light tracking-wide">
            Digitalize para aceder ao menu completo
          </p>
          <img
            src={qrImageUrl}
            alt="QR Code - Menu ARS"
            className="w-64 h-64 border-2 border-accent/50 rounded-none"
          />
          <p className="text-xs text-muted-foreground mt-6 text-center font-light">
            Aponte a câmara do seu telemóvel para o código
          </p>
        </div>

        {/* Info */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-sm text-foreground font-light">
            Compromisso, Rigor e Excelência
          </p>
          <p className="text-xs text-muted-foreground font-light">
            Luanda, Angola | +244 934 560 780
          </p>
        </div>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="w-full px-6 py-3 bg-accent text-primary rounded-none font-light tracking-wide hover:opacity-90 transition-opacity print:hidden"
        >
          🖨️ Imprimir QR Code
        </button>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white;
            color: black;
          }
          .min-h-screen {
            background: white;
          }
          button {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

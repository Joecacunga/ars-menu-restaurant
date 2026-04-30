export default function QRCodePage() {
  const qrImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028321113/WXfqbmEdfTP5Q6VjGBduAb/menu-qr-code-KAGdJSuDeX2LAoiNQPTE96.webp';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-white mb-2 tracking-widest">ARS</h1>
          <div className="h-px w-16 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground font-light tracking-wide">Menu Digital</p>
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

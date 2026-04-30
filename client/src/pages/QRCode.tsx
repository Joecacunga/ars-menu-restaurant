export default function QRCodePage() {
  const qrImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028321113/WXfqbmEdfTP5Q6VjGBduAb/menu-qr-code-KAGdJSuDeX2LAoiNQPTE96.webp';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-accent mb-2">ARS JAZZ</h1>
          <p className="text-muted-foreground">Menu Digital</p>
        </div>

        {/* QR Code Container */}
        <div className="bg-card border-2 border-accent rounded-lg p-8 mb-8 flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Digitalize para aceder ao menu completo
          </p>
          <img
            src={qrImageUrl}
            alt="QR Code - Menu ARS Jazz"
            className="w-64 h-64 border-4 border-accent rounded"
          />
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Aponte a câmara do seu telemóvel para o código
          </p>
        </div>

        {/* Info */}
        <div className="text-center mb-8">
          <p className="text-sm text-foreground mb-2">
            🎵 Experiência Gastronómica Premium
          </p>
          <p className="text-xs text-muted-foreground">
            Luanda, Angola
          </p>
        </div>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="w-full px-6 py-3 bg-accent text-primary rounded-sm font-semibold hover:opacity-90 transition-opacity print:hidden"
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

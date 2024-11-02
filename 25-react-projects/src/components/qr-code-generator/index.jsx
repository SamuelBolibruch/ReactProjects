import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => {
            setInput(e.target.value);
            console.log(input);
          }}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
        />
        <button disabled={input === ''} onClick={() => setQrCode(input)}>Generate</button>
      </div>
      <div>
        {
            qrCode.length > 0 ? <QRCode id="qr-code-generator" value={qrCode} bgColor="#fff"/> : null
        }
      </div>
    </div>
  );
}  

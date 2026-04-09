import { AudioLines, BadgeCheck, Check, CircleX, Mic, X } from "lucide-react";
import React from "react";

const AiInput = () => {
  const [text, setText] = React.useState("");
  const [rows, setRows] = React.useState(1);
  const [isCopyed, setIsCopied] = React.useState(false);
  const [isListening, setListening] = React.useState(false);


  const handleChange = (e) => {
    setText(e.target.value);
    setRows(Math.min(Math.max(e.target.scrollHeight / 24, 1), 10));
  };

  const handleListen = () => {
    const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!recognition) {
      alert("Speech Recognition API is not supported in this browser.");
      return;
    }
    const speechRecognition = new recognition();
    speechRecognition.continuous = true;
    speechRecognition.lang = "bn-BD";

    speechRecognition.onstart = ()=>{
      setListening(true);
    }

    speechRecognition.onresult = (event)=>{
      const voice_transcript = event.results[event.results.length - 1][0].transcript;
      setText((prev) => prev + " " + voice_transcript);
      setListening(false);
    }

    speechRecognition.start();

  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClose = ()=>{
    window.close();
  }
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-blue-800 to-purple-500 shadow-lg">
        <div className="bg-gray-900 rounded-xl p-6 flex items-start gap-4">
          <textarea
            onChange={handleChange}
            value={text}
            rows={rows}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 text-white placeholder-gray-400 resize-none outline-none max-h-48 overflow-y-auto rounded-lg transition"
          />
          <div className="flex gap-2 text-white">
            <button 
              onClick={handleListen} 
              className={`p-2 rounded-full border-2 border-gray-600 hover:bg-gray-800 hover:border-purple-500 transition duration-200 ${isListening ? "animate-pulse border-purple-500 bg-purple-500/20" : ""}`}
            >
              <Mic size={18} />
            </button>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-gray-800 rounded-lg transition duration-200 hover:text-blue-400"
            >
              {isCopyed ? 
                <Check size={20} className="text-green-400"/>
                : 
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg> 
              }
            </button>
            <button 
              type="button" 
              onClick={handleClose} 
              className="p-2 hover:bg-gray-800 rounded-lg transition duration-200 hover:text-red-400"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
      <select 
        name="selectlanguage" 
        className="bg-gray-800 text-white my-4 px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
      >
        <option value="bangla">Bangla (Bangladesh)</option>
        <option value="english">English (United States)</option>
      </select>
    </div>
  );
};

export default AiInput;

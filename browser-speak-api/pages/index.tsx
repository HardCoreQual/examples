import { useEffect, useRef } from "react";

export default function() {
    return <button onClick={() => {
        speechSynthesis.speak(new SpeechSynthesisUtterance("hello world"));
        }}>Press to manually speak</button>
}
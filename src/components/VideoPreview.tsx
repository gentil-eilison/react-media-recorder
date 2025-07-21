import { useEffect, useRef } from "react";

interface VideoPreviewProps {
    stream: MediaStream | null;
}

export default function VideoPreview({ stream }: VideoPreviewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <video 
            className="w-[640px] h-[480px] bg-black rounded" 
            ref={videoRef} 
            autoPlay 
        />
    );
}
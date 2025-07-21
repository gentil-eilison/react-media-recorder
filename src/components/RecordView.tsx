import { useReactMediaRecorder } from "react-media-recorder";
import TypographyH1 from "./TypographyH1";
import { 
    Circle, 
    CirclePause, 
    CirclePlay, 
    CircleStop, 
    Download, 
    Film, 
    Mic, 
    MicOff 
} from "lucide-react";
import VideoPreview from "./VideoPreview";
import RecordingPreview from "./RecordingPreview";
import { useRef } from "react";

export default function RecordView() {
    const { 
        status, 
        startRecording, 
        stopRecording, 
        pauseRecording,
        resumeRecording,
        muteAudio,
        unMuteAudio,
        clearBlobUrl,
        isAudioMuted,
        mediaBlobUrl,
        previewStream,
    } =
        useReactMediaRecorder({
            audio: {
                echoCancellation: true
            },
            video: {
                width: { min: 640, ideal: 1280, max: 1920 },
                height: { min: 480, ideal: 720, max: 1080 },
            },
            mediaRecorderOptions: {
                mimeType: "video/webm; codecs=vp8"
            }
        });
    const downloadRef = useRef<HTMLAnchorElement|null>(null);

    function handleStartRecording() {
        clearBlobUrl();
        startRecording();
    }

    function handleClick() {
        if (downloadRef.current && mediaBlobUrl) {
            downloadRef.current.click();
        }
    }
    
    function renderRecordingControls() {
        const controlsProps = {
            size: 40,
            color: "var(--color-white)",
            className: "hover:cursor-pointer bg-red-400 p-1 rounded"
        }

        switch(status) {
            case "recording":
                return (
                    <>
                        <CircleStop {...controlsProps} onClick={stopRecording} />
                        { isAudioMuted ? (
                            <MicOff {...controlsProps} onClick={unMuteAudio} />
                        ) : (
                            <Mic {...controlsProps} onClick={muteAudio} />
                        ) }
                        <CirclePause {...controlsProps} onClick={pauseRecording} />
                    </>
                );
            case "paused":
                return (
                    <>
                        <CircleStop {...controlsProps} onClick={stopRecording} />
                        { isAudioMuted ? (
                            <MicOff {...controlsProps} onClick={unMuteAudio} />
                        ) : (
                            <Mic {...controlsProps} onClick={muteAudio} />
                        ) }
                        <CirclePlay {...controlsProps} onClick={resumeRecording} />
                    </>
                );
            case "idle":
                return (
                    <>
                        <Circle {...controlsProps} onClick={handleStartRecording} />
                    </>
                );
            case "stopped":
                return (
                    <>
                        <Circle {...controlsProps} onClick={handleStartRecording} />
                        <a 
                            href={ mediaBlobUrl ?? undefined }
                            ref={downloadRef}
                            download="recording.webm"
                            className="hidden"
                        />
                        <Download {...controlsProps} onClick={handleClick} />
                    </>
                );
        }
    }
    
    return (
        <section id="video-recording">
            <header className="flex justify-center p-5">
                <TypographyH1>
                    Simple Video Recorder 
                    <Film size={64} color={"var(--color-red-500)"} />
                </TypographyH1>
            </header>
            <div 
                id="recording-preview" 
                className="flex flex-col items-center pb-10 gap-3"
            >
                { mediaBlobUrl ? (
                    <RecordingPreview mediaBlobUrl={mediaBlobUrl} />
                ) : (
                    <VideoPreview stream={previewStream} />
                ) }
                
                <span id="recording-controls" className="flex gap-5">
                    { renderRecordingControls() }
                </span>
            </div>
        </section>
    );
}
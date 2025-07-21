import { Mic, MicOff, type LucideProps } from "lucide-react";

interface AudioControlProps {
    isAudioMuted: boolean;
    unMuteAudio: () => void;
    muteAudio: () => void;
    iconProps: LucideProps;
}

export default function AudioControl(
    { isAudioMuted, unMuteAudio, muteAudio, iconProps }: AudioControlProps
) {
    return (
        <>
            { isAudioMuted ? (
                <MicOff 
                    color={iconProps.color} 
                    className={iconProps.className}
                    size={iconProps.size}
                    onClick={unMuteAudio} 
                />
            ) : (
                <Mic
                    color={iconProps.color}
                    className={iconProps.className}
                    size={iconProps.size}
                    onClick={muteAudio} 
                />
            ) }
        </>
    );
}
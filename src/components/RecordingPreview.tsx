import TypographyH2 from "./TypographyH2";

interface RecordingPreviewProps {
    mediaBlobUrl: string;
}

export default function RecordingPreview(
    { mediaBlobUrl }: RecordingPreviewProps
) {
    return (
        <>
            <TypographyH2>Recording Preview</TypographyH2>
            <video
                className="bg-black rounded"
                src={ mediaBlobUrl }
                controls
                />
        </>
    );
}
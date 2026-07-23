interface VideoElements {
    videoPlayer: HTMLVideoElement;
    botaoPlay: HTMLButtonElement;
    botaoStop: HTMLButtonElement;
}
interface FuncoesVideo {
    trocarBotao(): void;
    parar(): void;
    iniciarEventos(): void;
}
export default class VideoPlayer implements FuncoesVideo {
    private videoPlayer;
    private botaoPlay;
    private botaoStop;
    constructor(videoElements: VideoElements);
    trocarBotao(): void;
    parar(): void;
    iniciarEventos(): void;
}
export {};
//# sourceMappingURL=a035-execicio-video.d.ts.map
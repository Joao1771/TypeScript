interface VideoElements {
    videoPlayer: HTMLVideoElement
    botaoPlay: HTMLButtonElement
    botaoStop: HTMLButtonElement
}

interface FuncoesVideo {
    trocarBotao(): void
    parar(): void
    iniciarEventos(): void
}

export default class VideoPlayer implements FuncoesVideo {
    private videoPlayer: HTMLVideoElement
    private botaoPlay: HTMLButtonElement
    private botaoStop: HTMLButtonElement

    constructor(videoElements: VideoElements){
        this.videoPlayer = videoElements.videoPlayer
        this.botaoPlay = videoElements.botaoPlay
        this.botaoStop = videoElements.botaoStop
    }

    trocarBotao(): void {
        if (this.botaoPlay.innerText === "Play") {
            this.videoPlayer.play()
            this.botaoPlay.innerText = "Pause"
        } else {
            this.videoPlayer.pause()
            this.botaoPlay.innerText = "Play"
        }
    }

    parar(): void {
        this.videoPlayer.pause()
        this.videoPlayer.currentTime = 0
        this.botaoPlay.innerText = 'Play'
    }

    iniciarEventos(): void {
        this.botaoPlay.addEventListener('click', () => this.trocarBotao())
        this.botaoStop.addEventListener('click', () => this.parar())
    }
}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video") as HTMLVideoElement,
    botaoPlay: document.querySelector(".play") as HTMLButtonElement,
    botaoStop: document.querySelector(".stop") as HTMLButtonElement
})

videoPlayer.iniciarEventos()
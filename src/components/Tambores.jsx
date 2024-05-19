/*import { useEffect } from "react"

export default function Tambores(props) {
    const reproduzirAudio = () => {
        const audioElemento = document.getElementById(props.name)
        audioElemento.play()
    }

    const botaoApertado = (event) => {
        if (event.key.toUpperCase() === props.name.toUpperCase()) {
            reproduzirAudio()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', botaoApertado)

        return () => {
            document.removeEventListener('keydown', botaoApertado)
        }
    }, [])

    return (
        <td>
            <button className="drum-pad" id={props.id} onClick={reproduzirAudio}>
                <audio src={props.src} className="clip" id={props.name}></audio>
                {props.name}
            </button>
        </td>
    )
}*/
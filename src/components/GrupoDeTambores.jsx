import { useEffect, useState } from "react"
import ContainerDisplay from "./TelaDeControles"
import '../style.css'

export default function GrupoDeTambores() {
    const reproduzirAudio = (id) => {
        const audioElemento = document.getElementById(id)
        audioElemento.play()
        setMsgDisplay(textoDisplay[id])
    }

    const [msgDisplay, setMsgDisplay] = useState('')

    const textoDisplay = {
        'Q': 'Heater-1',
        'W': 'Heater-2',
        'E': 'Heater-3',
        'A': 'Heater-4',
        'S': 'Clap',
        'D': 'Open-HH',
        'Z': 'Kick-n\'-Hat',
        'X': 'Kick',
        'C': 'Closed-HH'
    }

    const botaoApertado = (event) => {
        const teclas = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

        if (teclas.includes(event.key.toUpperCase())){ 
            reproduzirAudio(event.key.toUpperCase())
        }

    }

    useEffect(() => {
        document.addEventListener('keydown', botaoApertado)

        return () => {
            document.removeEventListener('keydown', botaoApertado)
        }
    }, [])

    return (
        <div id="content">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button className="drum-pad" id="Heater-1" onClick={() => reproduzirAudio('Q')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
                                Q
                            </button>
                        </td>
                        <td>
                            <button className="drum-pad" id="Heater-1" onClick={() => reproduzirAudio('W')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
                                W
                            </button>
                        </td>
                        <td>
                            <button className="drum-pad" id="Heater-1" onClick={() => reproduzirAudio('E')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
                                E
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="drum-pad" id="Heater-4" onClick={() => reproduzirAudio('A')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
                                A
                            </button>
                        </td>
                        <td>
                            <button className="drum-pad" id="Clap" onClick={() => reproduzirAudio('S')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
                                S
                            </button>
                        </td>
                        <td>
                            <button className="drum-pad" id="Open-HH" onClick={() => reproduzirAudio('D')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
                                D
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="drum-pad" id="Kick-n'-Hat" onClick={() => reproduzirAudio('Z')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
                                Z
                            </button>
                        </td>
                        <td>
                            <button className="drum-pad" id="Kick" onClick={() => reproduzirAudio('X')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
                                X
                            </button>
                        </td>
                        <td>
                            <button className="drum-pad" id="Closed-HH" onClick={() => reproduzirAudio('C')}>
                                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
                                C
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ContainerDisplay texto={msgDisplay}/>
        </div>
    )
}
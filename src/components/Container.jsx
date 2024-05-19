import GrupoDeTambores from "./GrupoDeTambores";
import ContainerDisplay from "./TelaDeControles"

export default function Container () {
    return (
        <div className="container">
            <div id="drum-machine">
                <GrupoDeTambores/>
            </div>
        </div>
    )
}
import "./side_bar.module.scss";
export default function sideBar() {
  return (
    <>
    /* side-bar */
        <div className="sideBar">
            <div className="Logo">
                <img src="favicon.ico" alt="Logo" />
                <p>Smart Freeze</p>
            </div>
            <div className="Side_Buttons">
                <button className="Side_Button">Home</button>
                <button className="Side_Button">Geladeira</button>
                <button className="Side_Button">Ajustes</button>
                <button className="Side_Button">Perfil</button>
            </div>
            <button className="Exit">Sair</button>
        </div>
    </>
    );
}
import "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className="body">
        <div className="titulo">
          <h1> Geladeira de Usuário </h1>
          <img src="https://placehold.co/60x60" alt="" className="perfil" />
        </div>
        <div className="filtro">
          <p>Filtrar por: </p>
          <button type="button">Laticínios</button>
          <button type="button">Frutas</button>
          <button type="button">Carnes</button>
          <button type="button">Bebidas</button>
          <button type="button">Outros</button>
        </div>
        <div className="grid_itens">
          <div className="card_itens">
            <img src="https://placehold.co/50x50" alt="" />
            <h3 className="Item_nome">Maçãs</h3>
            <p className="Item_Qtd">5 unidades</p>
          </div>
          <div className="card_itens">
            <img src="https://placehold.co/50x50" alt="" />
            <h3 className="Item_nome">Leite</h3>
            <p className="Item_Qtd">2 Caixas</p>
          </div>
          <div className="card_itens">
            <img src="https://placehold.co/50x50" alt="" />
            <h3 className="Item_nome">Queijo</h3>
            <p className="Item_Qtd">1 Unidade</p>
          </div>
          <div className="card_itens">
            <img src="https://placehold.co/50x50" alt="" />
            <h3 className="Item_nome">Picanha</h3>
            <p className="Item_Qtd">1 Unidade</p>
          </div>
          <div className="card_itens">
            <img src="https://placehold.co/50x50" alt="" />
            <h3 className="Item_nome">Pizza</h3>
            <p className="Item_Qtd">1 Unidade</p>
          </div>
          <div className="card_itens">
            <img src="https://placehold.co/70x70" alt="" />
            <p className="Item_Add">Adicionar Mais</p>
          </div>
        </div>
      </div>
      {/* body */}
    </>
  );
}

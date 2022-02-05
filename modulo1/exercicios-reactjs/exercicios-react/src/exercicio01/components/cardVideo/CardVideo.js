export const CardVideo = ({titulo, imagem, video}) => {
  return (
    <div className="box-pagina-principal" onClick={video}>
      <img src={imagem} alt="" />
      <h4>{titulo}</h4>
    </div>
  );
  
};

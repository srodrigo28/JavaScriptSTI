const Mensagem = (props:any) => {
    return(
        <div>  { props.mensagem } </div>
    )
}

const MeuComponente = () =>{
    return(
        <div> <Mensagem mensagem="Mudei a mensagem" /> </div>
    )
}

export default MeuComponente;
import Stavka from "../Stavka/Stavka";



const IstorijaTransakcija = (props) => {
    const render = props.data.items.map((i) => {
        return <Stavka name={i.name} amount={i.amount} />;
    });
    return render;
};

export default IstorijaTransakcija

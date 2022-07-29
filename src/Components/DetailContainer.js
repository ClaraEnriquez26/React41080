import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Fetch from "./Utils/Fetch";
import ContainerProduct from "./Item";
import ItemDetail from './ItemDetail';

const DetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        Fetch(1000, data.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <div>
        <ContainerProduct item={dato} />
        <ItemDetail/>
        </div>
    );
}

export default DetailContainer;
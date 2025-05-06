import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos, deleteFavorito } from '../servico/favoritos'; // 
import { Titulo } from '../componentes/Titulo';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

const Resultado = styled.div`
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    text-align: center;

    img {
        width: 100px;
        height: auto;
    }
`;

function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);

    async function fetchFavoritos() {
        const favoritosDaAPI = await getFavoritos();
        setFavoritos(favoritosDaAPI);
    }

    async function deletarFavorito(id) {
        await deleteFavorito(id);
        await fetchFavoritos();
        alert(`Livro de id: ${id} deletado!`);
    }

    useEffect(() => {
        fetchFavoritos();
    }, []);

    return (
        <AppContainer>
            <Titulo>Aqui estão seus livros favoritos</Titulo>
            <ResultadoContainer>
                {favoritos.map((favorito) => (
                    <Resultado key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>

                        <p>{favorito.nome}</p>
                    </Resultado>
                ))}
            </ResultadoContainer>
        </AppContainer>
    );
}

export default Favoritos;

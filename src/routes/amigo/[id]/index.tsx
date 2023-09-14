import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/imagenes/pokemon-image';


export const usePokemonId = routeLoader$<number>(({ params, redirect }) => {
    console.log(params)
    const id = Number(params.id);
    if (isNaN(id)) {
        throw redirect(301, "/");

    }

    if (id <= 0) {
        throw redirect(301, "/");
    }

    if (id > 1000) {
        throw redirect(301, "/");
    }
    return id;
})


export default component$(() => {
    const pokemonId = usePokemonId();
    //routeLoader$ ANTES de que el componente se renderice

    //const location = useLocation();

    return (
        <>
            <h1>Amigo sencillo</h1>
            <h3>Yo soy el pokemon número {pokemonId.value} </h3>
            <PokemonImage id={pokemonId.value} />
        </>
    )
});
import { $, component$, useSignal } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/imagenes/pokemon-image";

export default component$(() => {
  const nav = useNavigate();

  const pokemonId = useSignal(4);
  const backImage = useSignal(false)
  const isVisible = useSignal(false)

  const changePokemonId = $(
    (value: number) => {
      if ((pokemonId.value + value) <= 0) return;
      pokemonId.value += value;
    }
  )
  const gotoPokemon = $(() => {
    nav(`/amigo/${pokemonId.value}/`);
  })

  return (
    <>
      <h1 class="p-8 bg-lime-300 text-6xl">Hi 👋</h1>
      <span class="text-9xl">{pokemonId.value}</span>
      {backImage.value ? 'ORIGINAL' : 'TRASERA'}



      <div onClick$={() => gotoPokemon()}>
        <PokemonImage id={pokemonId.value} size={241} backImage={backImage.value} isVisible={isVisible.value} />
      </div>


      <div class="mt-2">
        <button class="btn btn-primary mr-2" onClick$={() => changePokemonId(-1)}>Anterior</button>
        <button class="btn btn-primary" onClick$={() => changePokemonId(+1)}>Siguiente</button>

        <button class="btn btn-primary ml-2" onClick$={() => backImage.value = !backImage.value} >Girar</button>

        <button class="btn btn-primary ml-2" onClick$={() => isVisible.value = !isVisible.value} >{isVisible.value ? 'Ocultar' : 'Revelar'}</button>
      </div>

    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

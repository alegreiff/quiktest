import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <>
            Amics cercans
        </>
    )
})

export const head: DocumentHead = {
    title: "Cercanos",

};

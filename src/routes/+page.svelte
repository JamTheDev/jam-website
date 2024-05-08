<script lang="ts">
  import Button from "$lib/atoms/buttons/button.svelte";
  import FlatButton from "$lib/atoms/buttons/flat-button.svelte";
  import gsap from "gsap";
  import { onMount } from "svelte";

  let divider: HTMLElement;

  let textLeftSide: HTMLElement;
  let textRightSide: HTMLElement;

  onMount(async () => {
    gsap.set(divider, {
        scaleY: 0
    });

    gsap.set(textLeftSide.children, {
        opacity: 0,
        translateX: 50,
    });

    gsap.set(textRightSide.children, {
        opacity: 0,
        translateX: -50,
    });

    await gsap.to(divider, {
        ease: "expo.inOut",
        scaleY: 1,
        duration: 1
    });

    gsap.to(textLeftSide.children, {
        stagger: 0.1,
        ease: "expo.out",
        opacity: 1,
        translateX: 0,
        duration: 1

    });

    gsap.to(Array.from(textRightSide.children).reverse(), {
        stagger: 0.1,
        ease: "expo.out",
        opacity: 1,
        translateX: 0,
        duration: 1

    });
  });
</script>

<main
  class="absolute w-full h-full flex flex-row justify-center items-center gap-10"
>
  <div bind:this={textLeftSide} class="flex flex-col text-right justify-start text-[2rem] font-metropolis *:relative">
    <span class="">I'm still</span>
    <span class="underline font-black">Cooking.</span>
  </div>

  <div
    bind:this={divider}
    class="w-1 h-[23%] bg-gradient-to-t from-transparent via-white to-transparent"
  ></div>

  <div bind:this={textRightSide} class="flex flex-col justify-start text-[2rem] font-metropolis *:relative">
    <span class="font-bold">Come back</span>
    <span class="font-bold">later.</span>
  </div>
</main>

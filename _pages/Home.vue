<template>
    home <br>
    fact :
    {{ data.fact }}
</template>

<script setup>
const { data } = await useFetch("https://catfact.ninja/fact")

</script>
<template>
  <div>
    <ul>
      <li v-for="r in $router.getRoutes()">
        <NuxtLink :to="r.path" trailingSlash="append">{{ r.name }}</NuxtLink>
      </li>
    </ul>
    <RouterView />
  </div>
</template>

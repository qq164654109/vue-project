<template>
  <div>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

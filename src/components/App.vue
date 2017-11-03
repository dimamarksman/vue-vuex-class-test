<template>
  <div class="main">
    <div class="content">
      <div class="main-wrap">
        <p>
          Count: <strong>{{count}}</strong>
        </p>
        <button @click="increment()">Increment</button> <button @click="decrement()">Decrement</button>
        <p>Open the console to see the error</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./app.scss"></style>

<script src="./App.js"></script>

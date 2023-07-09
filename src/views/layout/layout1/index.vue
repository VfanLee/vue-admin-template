<script setup></script>

<template>
  <div class="layout1">
    <header class="page__header">page__container</header>

    <section class="page__banner">page__banner</section>

    <main class="page__main">
      <section class="l1">
        <section class="main__section">main__section</section>
      </section>

      <section class="l2">
        <aside class="main__aside-left">main__aside-left</aside>
        <section class="main__section">main__section</section>
      </section>

      <section class="l3">
        <aside class="main__aside-left">main__aside-left</aside>
        <section class="main__section">main__section</section>
        <aside class="main__aside-right">main__aside-right</aside>
      </section>
    </main>

    <footer class="page__footer">page__footer</footer>
  </div>
</template>

<style lang="scss" scoped>
.page__container {
  margin: 0 auto;
  max-width: 1170px;
}

.layout1 {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #fff;

  .page__header {
    height: 60px;
    background-color: $dark-primary-color;
  }

  .page__banner {
    height: 120px;
    background-color: $primary-color;
  }

  .page__main {
    .l1,
    .l2,
    .l3 {
      display: flex;
      height: 300px;
      border: 1px solid;

      .main__aside-left {
        width: 200px;
        background-color: rgba($color: #000, $alpha: 0.2);
      }

      .main__section {
        flex: 1;
        background-color: rgba($color: #000, $alpha: 0.5);
      }

      .main__aside-right {
        width: 200px;
        background-color: rgba($color: #000, $alpha: 0.2);
      }
    }
  }

  .page__footer {
    height: 60px;
    background-color: #000;
  }
}
</style>

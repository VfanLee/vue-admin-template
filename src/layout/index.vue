<script setup>
import '@/styles/layout.scss'
</script>

<template>
  <div class="vat-layout-bg"></div>
  <div class="vat-layout">
    <div class="l-sider"></div>
    <aside class="l-sider l-sider--fixed">sider</aside>
    <div class="l-container">
      <header class="l-header"></header>
      <div class="l-header l-header--fixed">header</div>
      <main class="l-content">
        <div class="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias recusandae soluta dignissimos velit reiciendis fuga quisquam quidem. Temporibus ducimus et sit magni hic, nemo corporis consectetur praesentium iusto nam, sed harum distinctio a. Quo possimus corrupti quidem nemo doloremque repellat neque aliquid nam pariatur animi iusto cumque sit vitae libero obcaecati quasi maiores, voluptas iste ullam? Pariatur at dolores, a nobis molestias laborum. Corrupti earum perspiciatis quia sit delectus temporibus ipsa architecto velit, hic harum dolorem iusto possimus fugit itaque nemo quis dolore beatae? Ipsam, veniam ad nemo in repellendus laborum odio, recusandae quisquam sequi facere optio, libero sed? Autem dolor aliquam excepturi ducimus debitis id doloremque corrupti repudiandae recusandae, quibusdam, unde mollitia assumenda, facilis officia ipsum voluptate? Deleniti, tempore doloremque ad eius temporibus ipsa in saepe commodi laudantium, inventore perspiciatis ducimus, molestias neque autem nesciunt natus eos explicabo molestiae nam consectetur alias doloribus at. Magni voluptate nesciunt, voluptatum dolorem laudantium similique autem fugiat minus officia laborum, nulla magnam deleniti facilis cum tempore fugit! Quae facere nobis tempora nemo fugit commodi, a sed in nesciunt consequuntur aliquam repudiandae laboriosam tenetur optio iusto alias. Mollitia voluptate, dolorem maiores, aut natus enim veritatis molestias quia accusantium, hic voluptatum omnis earum quae obcaecati.</div>
      </main>
      <footer class="l-footer">
        <div>
          <a href="https://github.com/VfanLee/vue3-admin-template">Vue3 Admin Template</a>
          <a href="https://github.com/VfanLee/vue3-admin-template" target="blank"><i class="fa-brands fa-github"></i></a>
        </div>
        <div>
          <i class="fa-regular fa-copyright"></i>
          <span>Powered by Vfan Lee</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  background-image: linear-gradient(#ff0, #0ff);
}
</style>

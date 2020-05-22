<template>
  <div class="recommends">
      <div v-for="item in recommends" :key="item.index" class="recommends-item">
          <a href="item.link">
              <img :src="item.image" alt="">
              <span>{{item.title}}</span>
          </a>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
  }

</script>
<style scoped>
.recommends {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px;
}
.recommends-item {
    flex: 1;
}
.recommends-item img {
    width: 70px;
    height: 70px;
}
span {
    display: block;
}
</style>
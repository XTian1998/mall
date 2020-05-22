<template>
  <grid-view>
    <div>
      <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goodsItem="item"></goods-list-item>
    </div>
  </grid-view>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  name: "TabContentDetail",
  components: {
    GridView,
    GoodsListItem
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    show() {
      console.log(this.categoryDetail);
    }
  }
};
</script>

<style scoped>
</style>

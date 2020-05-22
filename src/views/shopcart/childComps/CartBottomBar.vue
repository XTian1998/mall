<template>
  <div class="bottom-bar">
    <div class="check-content" @click="checkClick">
      <check-button class="check-button" :is-checked="isSelectAll" />
      <span>全选</span>
    </div>
    <div class="price">合计：{{totalPrice}}</div>
    <div class="calculate">去结算：({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter(item => item.checked)
          .reduce((pre, item) => {
            return pre + item.price * item.count;
          }, 0)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length == 0) return false;
      return !this.$store.state.cartList.filter(item => !item.checked).length;
    }
  },
  methods: {
    checkClick() {
      if (this.$store.state.cartList.length > 0) {
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item => (item.checked = false));
        } else {
          this.$store.state.cartList.forEach(item => (item.checked = true));
        }
      }
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  background-color: rgba(127, 128, 128, 0.1);
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  padding: 10px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.price {
  width: 130px;
}
.calculate {
  width: 100px;
  background-color: var(--color-tint);
  color: white;
  text-align: center;
}
</style>
<template>
    <common-card
      title="累计销售额"
      value="¥ 136,169,955"
    >
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">353.90%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">486.94%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphasis">¥ 30,000,000</span>
      </template>
    </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'index',
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare {
      font-size: 12px;
      margin-top: 3px;
      color: #666;
      display: flex;
      align-items: center;
    }
  }
</style>

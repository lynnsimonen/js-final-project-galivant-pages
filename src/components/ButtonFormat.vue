<template>
  <div class="container grid w-100"></div>
  <div class="row w-100 ">
    <div class="col-10"></div>
    <div class="col-2">
      <button class="btn-format btn flex-column row w-100">
        <span class="btn-icon col-1">
          <slot name="icon"></slot>
        </span>
        <span class="col-11 btn-title">
          <slot name="title"></slot>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="scss">

export default {
  name: "ButtonFormat"
}
</script>

<style lang="scss">
.row {
  display: flex;
}
.btn-format {
  background-color: darkgray;
}
.btn-icon {
  font-weight: bolder;
  font-size: x-large;
  justify-content: start;
}
.btn-title {
  font-size: medium;
  font-weight: bold;
}
.btn-format:hover {
  color: black;
  font-weight: bolder;
}
</style>
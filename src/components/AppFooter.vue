<template>
  <footer>
    <div>
      ©️2023 Copyright: SimonenWebBeginnings. All Rights Reserved | Privacy Policy
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style lang="scss">

footer {
  /*font-family: 'Inter', sans-serif;*/
  /*font-family: 'Pacifico', cursive;*/
  font-family: 'Philosopher', sans-serif;
  font-size: 15px;
  background-color: #e6e6e6;
  color: #010101;
  padding-top: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    height: 40px;
    flex-direction: column;
  }
}
</style>
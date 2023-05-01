<template>
<!--  <nav class="navbar navbar-light">-->
<!--    <div class="container-fluid">-->
<!--      <a class="navbar-brand" href="#">-->
<!--        <img src="../assets/Galivant-girl_150x150.jpg" width="150" height="150" alt="">-->
<!--      </a>-->
<!--      <div><span class="gal">GALivant</span><br>-->
<!--        <span class="sub-gal">gals sharing their travel adventures</span><br>-->
<!--        <span class="sub-gal2">memories • itineraries • photos • travel ideas</span>-->
<!--      </div>-->
<!--      <div class="dropdown dropstart">-->
<!--        <button class="btn btn-outline-secondary p-1 border-0 dropdown-toggle" type="button" id="dropdownMenuButton1"-->
<!--                data-bs-toggle="dropdown" aria-expanded="false">-->
<!--          <i class="bi bi-person-circle fs-1" style="color: #010101;" alt="circle person account"></i>-->
<!--        </button>-->
<!--        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">-->
<!--          <li><a class="dropdown-item" href="#">Profile</a></li>-->
<!--          <li><a class="dropdown-item" href="#">Login</a></li>-->
<!--          <li>-->
<!--            <hr class="dropdown-divider">-->
<!--          </li>-->
<!--          <li><a class="dropdown-item" href="#">Create New Account</a></li>-->
<!--          <li><a class="dropdown-item" href="#">Log Out</a></li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->

<AppHeader/>
      <!--  INSERT COMPONENT HERE-->
      <TripItemList/>
<AppFooter/>

<!--  <footer>-->
<!--    <div>-->
<!--      ©️2023 Copyright: SimonenWebBeginnings. All Rights Reserved | Privacy Policy-->
<!--    </div>-->
<!--  </footer>-->

</template>

<script>
import TripItemList from "@/components/TripItemList.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "MainPage",
  components: {AppFooter, AppHeader, TripItemList}
}
</script>

<style lang="scss">
nav {
  background-color: #e6e6e6;
  color: #b27946;

  .gal {
    /*font-family: 'Inter', sans-serif;*/
    /*font-family: 'Pacifico', cursive;*/
    font-family: 'Philosopher', sans-serif;
    font-size: 40px;
  }

  .sub-gal {
    /*font-family: 'Inter', sans-serif;*/
    font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    font-size: 20px;
    color: #010101;
  }

  .sub-gal2 {
    /*font-family: 'Inter', sans-serif;*/
    //font-family: 'Pacifico', cursive;
    font-family: 'Philosopher', sans-serif;
    font-size: 15px;

  }

  container-lg {
    display: flex;
    justify-content: space-between;
  }
}

.page-body {
  .title {
    //font-family: 'Inter', sans-serif;
    font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    font-size: 30px;
    color: rgba(1, 1, 1, 50);
    margin-top: 30px;
    margin-bottom: 30px;
  }

  li {
    //font-family: 'Inter', sans-serif;
    font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    font-size: 15px;
    color: #39c3fc;
    display: flex;
    justify-content: start;
  }

}

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
<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/Galivant-girl_150x150.jpg" width="150" height="150" alt="">
      </a>
      <div><span class="gal">GALivant</span><br>
        <span class="sub-gal">gals sharing their travel adventures</span><br>
        <span class="sub-gal2">memories • itineraries • photos • travel ideas</span>
      </div>
      <div class="dropdown dropstart">
        <button class="btn btn-outline-secondary dropdown-toggle border-0 p-1 m-5 " type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-person-circle fs-1" style="color: #010101;" alt="circle person account"></i>
        </button>
        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Sign In</a></li>
          <li><a class="dropdown-item" href="#">Sign Up</a></li>
          <li><a class="dropdown-item" href="#">My GALavant</a></li>
          <li><a class="dropdown-item" href="#">My Favorites</a></li>
          <li><a class="dropdown-item" href="#">Account & Settings</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Sign Out</a></li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "AppHeader"
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
</style>
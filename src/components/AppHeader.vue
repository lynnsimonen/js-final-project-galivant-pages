<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/Galivant-girl_150x150.jpg"
             width="100"
             height="100"
             alt="travelling female">
      </a>
      <div><span class="gal">GAL<i class="bi bi-flower3"></i>LIVANT</span><br>
        <span class="sub-gal">gals sharing their travel adventures</span><br>
        <span class="sub-gal2">memories • itineraries • photos • travel ideas</span>
      </div>
            <div class="dropdown dropstart">
              <button class="btn btn-outline-secondary dropdown-toggle border-0 p-1 m-3 " type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle fs-1" style="color: rgba(116,116,116);" alt="circle person account"></i>
              </button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Sign In</a></li>
                <li><a class="dropdown-item" href="#">Sign Up</a></li>
                <li><a class="dropdown-item" href="#">My Gal<i class="bi bi-flower3"></i>lavant</a></li>
                <li><a class="dropdown-item" href="#">My Favorites</a></li>
                <li><a class="dropdown-item" href="#">Account & Settings</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
<!--                <li><a class="dropdown-item" href="#">Sign Out</a></li>-->
              </ul>
            </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  methods:{
    showCover() {
      this.showCoverPage;
    }
  }
}
</script>


<style lang="scss">

button .btn .dropdown-toggle {
  padding: 20px;
}

nav {
  background-color: #e6e6e6;
  //opacity: 50%;
  color: black;
  margin-top: 0;

  .gal {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    //font-family: 'Sen', sans-serif;
    font-family: 'Heebo', sans-serif;
    font-size: 30px;
    color: #92e0c0;
    //color: rgba(116,116,116);
  }

  .sub-gal {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 20px;
    color: rgba(116, 116, 116);
  }

  .sub-gal2 {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 15px;

  }

  container-lg {
    display: flex;
    justify-content: space-between;
  }
}

</style>
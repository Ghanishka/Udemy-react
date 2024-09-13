// Navbar component
function Navbar() {
  return (
    <div class="navbar">

      <div class="navbar__s1">
        <h1 class="navbar__s1__title">Udemy</h1>
      </div>

      <div class="navbar__s2">
        <i class="fa-solid fa-magnifying-glass" style={{ color: "#121212" }}></i>
        <input placeholder="Search for anything here. Tech or Business, Art, ...">
        </input>
      </div>

      <div class="navbar__s3">
        <p>Courses</p>
        <div class="mylearning">
          <p>My Learning</p>
          <div class="mylearning__popup">
            <p>You did not purchase anything yet</p>
          </div>
        </div>
        <i class="fa-solid fa-cart-shopping" style={{ color: "#120202" }}></i>
        <i class="fa-solid fa-bell" style={{ color: "#0e0101" }}></i>
        <i class="fa-solid fa-user" style={{ color: "#130101" }}></i>
      </div>

      <div class="navbar__s4">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}


export default Navbar
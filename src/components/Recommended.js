// Recommended

import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommended()
{
    return(
    <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p> Pick for the best fit</p>
        <div class="recommended__container">

            <div class="course-card">
                <img src={c1} alt="c1"></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>2000</del></p>
            </div>

            <div class="course-card">
                <img src={c2} alt ="c2"></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p> 3.9 ⭐⭐⭐</p>
                <p>449 <del>3000</del> </p>
            </div>

            <div class="course-card">
                <img src={c3} alt="c3"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>6000</del></p>
            </div>

            <div class="course-card">
                <img src={c4} alt="c4"></img>
                <h3>Master UI/UX designing</h3>
                <p>Col Steele</p>
                <p>5 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>5000</del> </p>
            </div>

        </div>
    </div>
)
}

export default Recommended
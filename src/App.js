import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Sale from './components/Sale'
import Recommended from './components/Recommended'
import Topic from './components/Topic'
import Mostpopular from './components/Mostpopular'
import Footer from './components/Footer'


function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale></Sale>
            <Recommended></Recommended>
            <Topic></Topic>
            <Mostpopular></Mostpopular>
            <Footer></Footer> 
        </div>
    )
}

export default App
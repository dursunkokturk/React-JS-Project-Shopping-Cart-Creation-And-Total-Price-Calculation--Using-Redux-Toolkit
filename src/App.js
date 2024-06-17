import './App.css';
import CourseList from './components/CourseList';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { calculateTotal } from './control/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {

    // useSelector Kullanarak
    // store.js Dosyasindaki store Degiskeni Uzerinden
    // cardSlice.js Dosyasindaki cardSlice Degiskeni Uzerinden 
    // initialState Degiskenine Atanan Objeye Ulasiyoruz Ve
    // Ulasilan Datayi quantity Degiskeni Uzerinden Ekrana Yazdiriyoruz
    const { cartItems } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    // useEffect Kullanarak 
    // dispatch Yontemi Ile 
    // calculateTotal Methodunu Cagiriyoruz
    // calculateTotal Methodunu Uzerinden
    // cardSlice.jd Dosyasindaki initialState Icinde Yer Alan 
    // cardItems Attribute Icindeki Array Icinde Yapilan Herhangi Bir Degisikligin
    // Ekranda Gorunmesini Sagliyoruz
    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems]);
    return (
        <div className="App">
            <Navbar />
            <CourseList />
        </div>
    );
}

export default App;
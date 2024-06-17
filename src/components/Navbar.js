import React from 'react';
import { BsFillBasketFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function Navbar() {

    // useSelector Kullanarak
    // store.js Dosyasindaki store Degiskeni Uzerinden
    // cardSlice.js Dosyasindaki cardSlice Degiskeni Uzerinden 
    // initialState Degiskenine Atanan Objeye Ulasiyoruz Ve
    // Ulasilan Datayi quantity Degiskeni Uzerinden Ekrana Yazdiriyoruz
    const { quantity } = useSelector((store) => store.cart);
    console.log(useSelector((store) => store.cart));
    return (
        <nav>
            <div className="navbar">
                <h3>Kurs Uygulamaması</h3>
                <div className="navDiv">
                    <div className="itemsDiv">
                      <p>{quantity}</p>
                    </div>
                    <BsFillBasketFill className="itemsIcon" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
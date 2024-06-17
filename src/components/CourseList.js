import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseItem from './CourseItem';
import { clearCart } from '../control/cartSlice';

function CourseList() {
    const dispatch = useDispatch();

    // useSelector Kullanarak
    // store.js Dosyasindaki store Degiskeni Uzerinden
    // cardSlice.js Dosyasindaki cardSlice Degiskeni Uzerinden 
    // initialState Degiskenine Atanan Objeye Ulasiyoruz Ve
    // Ulasilan Datanin cartItems, quantity, total Degiskenleri Uzerinden 
    // Data lari Ekrana Yazdiriyoruz
    const { cartItems, quantity, total } = useSelector((store) => store.cart);
    return (
        <>

            {/* Sepet Icinde
                Urun Yok Ise Yapilacak Islemler */}
            {quantity < 1 ? (
                <section className="cart">
                    <header>
                        <h2>Sepetim</h2>
                        <h4>bomboş</h4>
                    </header>
                </section>
            ) : (

                /* Sepet Icinde
                        Urun Yok Ise Yapilacak Islemler */
                <section className="cart">
                    <header>
                        <h2>Sepetim</h2>
                    </header>
                    <div>

                        {/* cartItems Icindeki Data lar Arasinda 
                            map Method Ile Tarama Yapiyoruz
                            Tarama Sonucunda 
                            CourseItem Component Ile Data lari Yazdiriyoruz */}
                        {cartItems.map((item) => {
                          return <CourseItem key={item.id} {...item} />;
                        })}
                    </div>
                    <footer>
                        <hr />
                        <div>
                            <h4>
                                Toplam Tutar 
                                <span>
                                    {total} TL
                                </span>
                            </h4>
                        </div>

                        {/* Butona Tiklandiginda onClick Attribute Icinde
                            dispatch Yontemini Kullanarak 
                            cardSlice.js Dosyasindaki
                            clearCart Methodu Cagirarak Silme Islemini Yapiyoruz*/}
                        <button className="cartClearButton"
                                onClick={() => dispatch(clearCart())}
                        >
                            Temizle
                        </button>
                    </footer>
                </section>
            )}
        </>
    );
}

export default CourseList;
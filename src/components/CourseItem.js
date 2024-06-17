import React from 'react';

// Asagi Ve Yukari Yonde Ok Isaretlerini Import Ediyoruz
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../control/cartSlice';

// Ekrana Yazdirilacak Data lara Attribute lar Uzerinden 
// CourseItems.js Dosyasindaki Data lara Ulasiyoruz
function CourseItem({ id, title, price, img, quantity }) {
    const dispatch = useDispatch();
    return (
        <div className="cartItem">

            {/* Ulasilan Data lari Ekrana Yazdiriyoruz */}
            <img src={img} alt="" />
            <div className="cartInfo">
                <h4>

                    {/* Ulasilan Data lari Ekrana Yazdiriyoruz */}
                    {title}
                </h4>
                <h4>

                    {/* Ulasilan Data lari Ekrana Yazdiriyoruz */}
                    {price}TL
                </h4>
                <div>

                    {/* Butona Tiklandiginda 
                        onClick Attribute Icinde 
                        dispatch Yontemini Kullanarak 
                        increase Method unu Cagiriyoruz Ve 
                        Bu Esnada Id Bilgisini Gonderiyoruz*/}
                    <button className="cartQuantityButton"
                            onClick={() => {
                                dispatch(increase(id));
                            }}
                    >
                        <BsChevronUp />
                    </button>
                    <p className="cartQuantity">

                        {/* Ulasilan Data lari Ekrana Yazdiriyoruz */}
                        {quantity}
                    </p>

                    {/* Butona Tiklandiginda 
                        onClick Attribute Icinde 
                        dispatch Yontemini Kullanarak 
                        decrease Method unu Cagiriyoruz Ve 
                        Bu Esnada Id Bilgisini Gonderiyoruz*/}
                    <button className="cartQuantityButton"
                            onClick={() => {
                                dispatch(decrease(id));
                            }}
                    >
                        <BsChevronDown />
                    </button>
                </div>

                {/* Hangi Kursun Yanindaki Sil Butona Tiklandi Ise 
                    O Kursun id Bilgisini onClick Attribute Icinde
                    dispatch Yontemini Kullanarak 
                    cardSlice.js Dosyasindaki
                    removeItem Methodu Cagirarak Tek Tek Silme Islemini Yapiyoruz*/}
                <button className="cartDeleteButtton"
                        onClick={() => {
                            dispatch(removeItem(id));
                        }}
                >
                    Sil
                </button>
            </div>
        </div>
    );
}

export default CourseItem;
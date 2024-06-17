import { createSlice } from '@reduxjs/toolkit';
import courseItems from '../courseItems';




// cardSlice Dosyasinda Yonetme Islemlerini 
// Hangi Dosyadan Yapacak Isek 
// O Dosyaya cardSlice Dosyasini Component Olarak Import Ediyoruz
// Bu Projede store.js Dosyasinda Import Ediyoruz


// State Icine 
// Proje Icinde Yonetilmesi Gereken Ogeleri Yaziyoruz
// cartItems Attribute State Icinde Yonetilmesi Gereken Ogelerin Yer Aldigi Array
// quantity Attribtue State Icinde Yonetilmesi Gereken Oge Sayisi
// total Attribtue State Icindeki Ogelerin Toplam Fiyat Bilgisi
const initialState = {
    cartItems: courseItems,
    quantity: 5,
    total: 0,
};

// cartSlice Degiskeni Icinde Kontrol Edilecek Kisma 
// name Attribute Ile Isim Veriyoruz
// name Attribute dan Sonra Kontrol Edilecek State Adini Yaziyoruz
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        // clearCart Method Calistirildigida 
        // cardItems Attribute Icindeki 
        // Array in Icini Siliyoruz
        clearCart: (state) => {
            state.cartItems = [];
        },

        // removeItem Method Calistirildigida
        // Tiklanilan Kursun id Bilgisini Aliyoruz
        // Tiklanilan Kursun id Bilgisi Ile 
        // Array Icindeki Objenin payload Attribute Icindeki id Bilgisi Eslesir Ise
        // cardItems Attribute Icindeki 
        // Array in Icinde Yer Alan Data lari Tek Tek Siliyoruz
        removeItem: (state, action) => {
            // console.log(action.payload);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },

        // increase Method Calistirildigida
        // Tiklanilan Kursun state Attribute u Uzerinden
        // cardItems Attribute u Uzerinden 
        // find Method Kullanilarak
        // Array Icindeki Objenin payload Attribute Icindeki id Bilgisi Eslesir Ise
        // quantity Attribute Uzerinden 
        // Tiklanilan Kursun Sepetteki Sayisini Artirma Yapiyoruz
        increase: (state, action) => {
            const cartItem = state.cartItems.find(
              (item) => item.id === action.payload
            );
            cartItem.quantity += 1;
        },

        // decrease Method Calistirildigida
        // Tiklanilan Kursun state Attribute u Uzerinden
        // cardItems Attribute u Uzerinden 
        // find Method Kullanilarak
        // Array Icindeki Objenin payload Attribute Icindeki id Bilgisi Eslesir Ise
        // quantity Attribute Uzerinden 
        // Tiklanilan Kursun Sepetteki Sayisini Azaltma Yapiyoruz
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );
            cartItem.quantity -= 1;
        },

        // state Attribute Uzerinden
        // cardItems Attribute Uzerinden
        // forEach Methodu Icinde
        // item Parametresi Uzerinden 
        // quantity Attribute Uzerinden Alinan Urun Sayisi Bilgisi Ile 
        // price Attribute Uzerinden Alinan Fiyat Bilgisi Gereken Islem Yapildiktan Sonra
        // Toplam Fiyat Bilgisi Kullaniciya Veriyoruz
        // quantity Attribute Uzerinden Alinan 
        // Toplam Urun Sayisi Bilgisini 
        // Kullaniciya Ekrandaki Sepet Simgesinin Uzerinde Gosteriyoruz
        calculateTotal: (state) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
                total += item.quantity * item.price;
                quantity += item.quantity;
            });
            state.quantity = quantity;
            state.total = total;
        },
    },
});

// console.log(cartSlice);

// cartSlice Degiskeni Uzerinden 
// actions Attribute Uzerinden
// Disaridan Erismek Istedigimiz Methodlari 
// Erisime Aciyoruz
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';

// Proje Icinde Yapilacak Islemlerin Yonetimi 
//store.js Dosyasi Uzerinden Yapilacak




// cardSlice.js Dosyasinda Yonetim Islemlerinin Yapilmasi Icin
// cardSlice Dosyasini Component Olarak Import Ediyoruz
import cartReducer from './control/cartSlice';

// reducer Icinde Yapilacak Tum Islemleri 
// store.js Dosyasinin Import Edildigi index.js Dosyasinda Kullanabiliriz
// store Degiskenine Atanan Fonksiyon Icindeki reducer Alaninda 
// Yonetilecek Alanlarda Yapilmak Istenilen Islemlere Ulasabiliriz
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
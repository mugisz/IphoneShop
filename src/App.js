import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./sections/header/Header";
import Main from "./sections/main/Main";
import IphonePage from "./sections/productWhichPage/Iphone";
import AirpodsPage from "./sections/productWhichPage/AirPods";
import BuyPage from "./sections/BuyPage/BuyPage";
import BasketPage from "./sections/basketPage/BasketPage";
import MacBookPage from "./sections/productWhichPage/MacBook";
import IpadPage from "./sections/productWhichPage/Ipad";
import WatchPage from "./sections/productWhichPage/watch";

import Dostavka from "./sections/headerLinkSections/dostavka";

import Garant from "./sections/headerLinkSections/garant";
import ContacsPage from "./sections/headerLinkSections/contacts";
import axios from "axios";
const App = () => {
  // const card = [
  //   {
  //     id: 1,
  //     count: 1,
  //     smalImg1:
  //       "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_13_q421_midnight_pdp_image_position-1b__ww-ru_1_5.jpg",
  //     smalImg2:
  //       "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-midnight-witb-2021_wid_364_hei_784_fmt_j_5.jpg",
  //     smalImg3:
  //       "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_13_q421_midnight_pdp_image_position-2__ww-ru_1_5.jpg",
  //     smalImg4:
  //       "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_13_q421_midnight_pdp_image_position-2__ww-ru_1_5.jpg",
  //     img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3E0ofGEdZLfLKQLiwE_Nx3XDB0ENUrYEkYa_xnPH_s6J3Pe47lsuz8-o-hThG59G-e833XPGjSFJrWYwVKn5ek8J_UehkIqgulV0K0w5tEDhuNxNuJDe3YAo8&usqp=CAc",
  //     name: "Iphone 14 Pro 128Gb Темно-Фиолетовый",
  //     price: "41000",
  //   },
  //   {
  //     id: 2,
  //     count: 1,
  //     smalImg1:
  //       "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_gold_pdp-images_position-1a_2.jpg",
  //     smalImg2:
  //       "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_gold_pdp-images_position-1b_2.jpg",
  //     smalImg3:
  //       "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-14-pro-finish-select-202209-6-1inch-gold_av1_geo_us_3_2.jpg",
  //     smalImg4:
  //       "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_gold_pdp-images_position-2_2.jpg",
  //     img: "https://i.allo.ua/media/catalog/product/cache/1/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/w/w/wwen_iphone14pro_q422_gold_pdp-images_position-1a_2.jpg",
  //     name: "Iphone 14 Pro 128Gb Золотой",
  //     price: "89990 ",
  //   },
  //   {
  //     id: 3,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2672.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2674.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2673.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2671.jpg",
  //     img: "https://i-point.ru/storage/item/main/1208.jpg",
  //     name: "Iphone 14 Pro 128Gb Серебристий",
  //     price: "89990 ",
  //   },
  //   {
  //     id: 4,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2668.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2670.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2669.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2671.jpg",
  //     img: "https://i-point.ru/storage/item/main/1212.jpg",
  //     name: "Iphone 14 Pro 128Gb Черный Космос ",
  //     price: "89990 ",
  //   },

  //   {
  //     id: 5,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2707.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2709.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2708.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2700.jpg",
  //     img: "https://i-point.ru/storage/item/main/1200.jpg",
  //     name: "Iphone 14 Pro 256Gb Темно-Фиолетовый",
  //     price: "94990 ",
  //   },
  //   {
  //     id: 6,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2675.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2677.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2676.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2671.jpg",
  //     img: "https://i-point.ru/storage/item/main/1204.jpg",
  //     name: "Iphone 14 Pro 256Gb Золотой",
  //     price: "94990 ",
  //   },
  //   {
  //     id: 7,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2672.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2674.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2673.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2671.jpg",

  //     img: "https://i-point.ru/storage/item/main/1208.jpg",
  //     name: "Iphone 14 Pro 256Gb Серебристий",
  //     price: "94990 ",
  //   },
  //   {
  //     id: 8,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2668.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2670.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2669.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2671.jpg",
  //     img: "https://i-point.ru/storage/item/main/1212.jpg",
  //     name: "Iphone 14 Pro 256Gb Черный Космос ",
  //     price: "98990 ",
  //   },

  //   {
  //     id: 9,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2707.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2709.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2708.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2700.jpg",
  //     img: "https://i-point.ru/storage/item/main/1200.jpg",
  //     name: "Iphone 14 Pro 1TB Темно-Фиолетовый",
  //     price: "129990 ",
  //   },
  //   {
  //     id: 10,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2675.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2677.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2676.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2671.jpg",
  //     img: "https://i-point.ru/storage/item/main/1204.jpg",
  //     name: "Iphone 14 Pro 1TB Золотой",
  //     price: "129990 ",
  //   },
  //   {
  //     id: 11,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2672.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2674.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2673.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2671.jpg",
  //     img: "https://i-point.ru/storage/item/main/1208.jpg",
  //     name: "Iphone 14 Pro 1TB Серебристий",
  //     price: "129990 ",
  //   },
  //   {
  //     id: 12,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2668.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2670.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2669.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2671.jpg",
  //     img: "https://i-point.ru/storage/item/main/1212.jpg",
  //     name: "Iphone 14 Pro 1TB Черный Космос ",
  //     price: "129990 ",
  //   },

  //   {
  //     id: 13,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2710.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2711.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2712.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1196.jpg",
  //     name: "Iphone 14  128Gb Red",
  //     price: "56990 ",
  //   },
  //   {
  //     id: 14,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2723.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1183.jpg",
  //     name: "Iphone 14  128Gb Голубой",
  //     price: "56990 ",
  //   },
  //   {
  //     id: 15,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2714.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2716.jpg",
  //     smalImg3: "    https://i-point.ru/storage/gallery/big/2715.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1191.jpg",
  //     name: "Iphone 14  128Gb Сияющая Звезда",
  //     price: "56990 ",
  //   },
  //   {
  //     id: 16,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2717.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2719.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2718.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1189.jpg",
  //     name: "Iphone 14  128Gb Темная ночь ",
  //     price: "56990 ",
  //   },

  //   {
  //     id: 17,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2710.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2711.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2712.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1196.jpg",
  //     name: "Iphone 14  128Gb Red",
  //     price: "56990 ",
  //   },
  //   {
  //     id: 18,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2723.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1183.jpg",
  //     name: "Iphone 14  256Gb Голубой",
  //     price: "68990 ",
  //   },
  //   {
  //     id: 19,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2714.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2716.jpg",
  //     smalImg3: "    https://i-point.ru/storage/gallery/big/2715.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1191.jpg",
  //     name: "Iphone 14  256Gb Сияющая Звезда",
  //     price: "68990 ",
  //   },
  //   {
  //     id: 20,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2717.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2719.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2718.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1189.jpg",
  //     name: "Iphone 14  256Gb Темная ночь ",
  //     price: "68990 ",
  //   },

  //   {
  //     id: 21,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2710.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2711.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2712.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1196.jpg",
  //     name: "Iphone 14  128Gb Red",
  //     price: "62990 ",
  //   },
  //   {
  //     id: 22,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2723.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1183.jpg",
  //     name: "Iphone 14  512Gb Голубой",
  //     price: "76990 ",
  //   },
  //   {
  //     id: 23,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2714.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2716.jpg",
  //     smalImg3: "    https://i-point.ru/storage/gallery/big/2715.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1191.jpg",
  //     name: "Iphone 14  512Gb Сияющая Звезда",
  //     price: "76990 ",
  //   },
  //   {
  //     id: 24,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2717.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2719.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2718.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/1189.jpg",
  //     name: "Iphone 14  512Gb Темная ночь ",
  //     price: "76990 ",
  //   },

  //   {
  //     id: 25,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/353.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/351.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/352.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/350.jpg",
  //     img: "https://i-point.ru/storage/item/main/416.jpg",
  //     name: "Iphone SE 2020 64Gb Black",
  //     price: "27990 ",
  //   },
  //   {
  //     id: 26,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/356.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/354.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/355.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/350.jpg",
  //     img: "https://i-point.ru/storage/item/main/419.jpg",
  //     name: "Iphone SE 2020 64Gb (PRODUCT) RED",
  //     price: "27990 ",
  //   },
  //   {
  //     id: 27,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/1783.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/1784.jpg",
  //     img: "https://i-point.ru/storage/item/main/422.jpg",
  //     name: "Iphone SE 2020 64Gb White",
  //     price: "27990 ",
  //   },
  //   {
  //     id: 28,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/353.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/351.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/352.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/350.jpg",
  //     img: "https://i-point.ru/storage/item/main/416.jpg",
  //     name: "Iphone SE 2020 64Gb Black",
  //     price: "27990 ",
  //   },

  //   {
  //     id: 29,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/xr_07.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/xr_08.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/xr_04.jpg",
  //     img: "https://i-point.ru/storage/item/main/xr_black.jpg",
  //     name: "Iphone Xr 64Gb Black",
  //     price: "30990 ",
  //   },
  //   {
  //     id: 30,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/xr_11.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/xr_12.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/xr_04.jpg",
  //     img: "https://i-point.ru/storage/item/main/xr_coral.jpg",
  //     name: "Iphone Xr 64Gb Coral",
  //     price: "29990 ",
  //   },

  //   {
  //     id: 31,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/353.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/351.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/352.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/350.jpg",
  //     img: "https://i-point.ru/storage/item/main/416.jpg",
  //     name: "Iphone SE 2020 256Gb Black",
  //     price: "32990 ",
  //   },
  //   {
  //     id: 32,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/356.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/354.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/355.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/350.jpg",
  //     img: "https://i-point.ru/storage/item/main/419.jpg",
  //     name: "Iphone SE 2020 256Gb (PRODUCT) RED",
  //     price: "32990 ",
  //   },
  //   {
  //     id: 33,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/1783.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/1784.jpg",
  //     img: "https://i-point.ru/storage/item/main/422.jpg",
  //     name: "Iphone SE 2020 256Gb White",
  //     price: "32990 ",
  //   },
  //   {
  //     id: 34,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/353.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/351.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/352.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/350.jpg",
  //     img: "https://i-point.ru/storage/item/main/416.jpg",
  //     name: "Iphone SE 2020 256Gb Black",
  //     price: "32990 ",
  //   },

  //   {
  //     id: 35,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/3.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/4.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1.jpg",
  //     img: "https://i-point.ru/storage/item/main/182.jpg",
  //     name: "Iphone 11 64Gb Белий",
  //     price: "32990 ",
  //   },
  //   {
  //     id: 36,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/5.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/6.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/7.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1.jpg",
  //     img: "https://i-point.ru/storage/item/main/183.jpg",
  //     name: "Iphone 11 64Gb Черный",
  //     price: "32990 ",
  //   },

  //   {
  //     id: 39,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/541.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/539.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/540.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1.jpg",
  //     img: "https://i-point.ru/storage/item/main/182.jpg",
  //     name: "Iphone 11 128Gb Белий",
  //     price: "39990 ",
  //   },
  //   {
  //     id: 40,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/5.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/6.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/7.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1.jpg",
  //     img: "https://i-point.ru/storage/item/main/183.jpg",
  //     name: "Iphone 11 128Gb Черный",
  //     price: "39990 ",
  //   },

  //   {
  //     id: 43,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2723.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/545.jpg",
  //     name: "Iphone 12 64Gb Белий",
  //     price: "45990 ",
  //   },
  //   {
  //     id: 44,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/544.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/542.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/544.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/548.jpg",
  //     name: "Iphone 12 64Gb Красний",
  //     price: "45990 ",
  //   },
  //   {
  //     id: 45,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/544.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/545.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/546.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/566.jpg",
  //     name: "Iphone 12 64Gb Зелений",
  //     price: "45990 ",
  //   },
  //   {
  //     id: 46,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/547.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/569.jpg",
  //     name: "Iphone 12 64Gb Синий",
  //     price: "45990 ",
  //   },
  //   {
  //     id: 47,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/835.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/836.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/837.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/652.jpg",
  //     name: "Iphone 12 64Gb Фиолетовый",
  //     price: "45990 ",
  //   },

  //   {
  //     id: 48,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2723.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/545.jpg",
  //     name: "Iphone 12 128Gb Белий",
  //     price: "52990 ",
  //   },
  //   {
  //     id: 49,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/544.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/542.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/544.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/548.jpg",
  //     name: "Iphone 12 128Gb Красний",
  //     price: "52990 ",
  //   },
  //   {
  //     id: 50,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/547.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/566.jpg",
  //     name: "Iphone 12 128Gb Зелений",
  //     price: "52990 ",
  //   },
  //   {
  //     id: 51,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2723.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/569.jpg",
  //     name: "Iphone 12 128Gb Синий",
  //     price: "52990 ",
  //   },
  //   {
  //     id: 52,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/835.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/836.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/837.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/2713.jpg",
  //     img: "https://i-point.ru/storage/item/main/652.jpg",
  //     name: "Iphone 12 128Gb Фиолетовый",
  //     price: "52990 ",
  //   },

  //   {
  //     id: 53,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/1132.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/1133.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/1130.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1131.jpg",
  //     img: "https://i-point.ru/storage/item/main/762.jpg",
  //     name: "Iphone 13 128Gb Розовий",
  //     price: "52990 ",
  //   },
  //   {
  //     id: 54,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2717.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2719.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2718.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1131.jpg",
  //     img: "https://i-point.ru/storage/item/main/771.jpg",
  //     name: "Iphone 13 128Gb Темная Ночь",
  //     price: "52990 ",
  //   },
  //   {
  //     id: 55,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2714.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2716.jpg",
  //     smalImg3: "    https://i-point.ru/storage/gallery/big/2715.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1131.jpg",
  //     img: "https://i-point.ru/storage/item/main/774.jpg",
  //     name: "Iphone 13 128Gb Сиящая звезда",
  //     price: "52990 ",
  //   },
  //   {
  //     id: 56,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2723.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2725.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2724.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1131.jpg",
  //     img: "https://i-point.ru/storage/item/main/766.jpg",
  //     name: "Iphone 13 128Gb Синий",
  //     price: "52990 ",
  //   },
  //   {
  //     id: 57,
  //     count: 1,
  //     smalImg1: "https://i-point.ru/storage/gallery/big/2707.jpg",
  //     smalImg2: "https://i-point.ru/storage/gallery/big/2709.jpg",
  //     smalImg3: "https://i-point.ru/storage/gallery/big/2708.jpg",
  //     smalImg4: "https://i-point.ru/storage/gallery/big/1131.jpg",
  //     img: "https://i-point.ru/storage/item/main/1200.jpg",
  //     name: "Iphone 13 128Gb Фиолетовый",
  //     price: "52990 ",
  //   },
  // ];
  const [item, SetItem] = React.useState({});
  const [busket, setBusket] = React.useState([]);
  const [show, onShowBusket] = React.useState(false);

  const [mas, SetMas] = React.useState([]);
  React.useEffect(() => {
    const getIphone = async () => {
      const { data } = await axios.get("http://localhost:3001/iphone");
      SetMas(data);
      return data;
    };

    getIphone();
  }, []);
  console.log(mas);
  const setBuy = (a) => {
    return SetItem(() => a);
  };
  const SetBusket = (a) => {
    onShowBusket(true);
    let copy = Object.assign([], busket);
    copy.push(a);

    setBusket(copy);
  };
  const deleteProduct = (product) => {
    setBusket(busket.filter((b) => b !== product));
  };
  console.log(busket);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/iphone"
          element={
            <IphonePage SetBusket={SetBusket} setBuy={setBuy} card={mas} />
          }
        />
        <Route
          path="/airpods"
          element={<AirpodsPage SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/mac"
          element={<MacBookPage SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/ipad"
          element={<IpadPage SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/appleWatch"
          element={<WatchPage SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/buy"
          element={
            <BuyPage
              SetBusket={SetBusket}
              id={item.id}
              count={item.count}
              smalImg1={item.smalImg1}
              smalImg4={item.smalImg4}
              smalImg3={item.smalImg3}
              smalImg2={item.smalImg2}
              setBuy={setBuy}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <BasketPage
              deleteProduct={deleteProduct}
              show={show}
              busket={busket}
            />
          }
        />
        <Route path="/dostavka" element={<Dostavka />} />

        <Route path="/garant" element={<Garant />} />
        <Route path="/contacts" element={<ContacsPage />} />
      </Routes>
    </div>
  );
};

export default App;

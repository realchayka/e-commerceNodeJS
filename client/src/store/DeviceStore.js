import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name:"Холодильники"},
            {id:2, name:"Смартфоны"},
            {id:3, name:"Ноутбуки"},
            {id:4, name:"Телевизоры"}
        ]
        this._brands = [
            {id:1, name:"Samsung"},
            {id:2, name:"Apple"},
            {id:3, name:"Lenovo"},
            {id:4, name:"Asus"}
        ]
        this._devices = [
            {id:1, name:"Iphone 12 pro", price: 25000, rating:5, img:"https://msk-apple.ru/image/cache/catalog/apple12/apple%2012%20pro/apple12pro_grey_1-700x700.jpg"},
            {id:2, name:"Iphone 13 pro", price: 45000, rating:5, img:"https://avatars.mds.yandex.net/get-mpic/7381431/img_id2251272444043821917.jpeg/orig"},
            {id:3, name:"Iphone 14 pro", price: 65000, rating:5, img:"https://avatars.mds.yandex.net/get-mpic/2016828/img_id6576910136257959399.jpeg/orig"},
        ]
        this._selectedType = []
        this._selectedBrand = []
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(device) {
        this._brands = device
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}
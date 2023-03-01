import { string } from "yup";

export interface iDefaultProviderProps {
   children: React.ReactNode;
}

export interface iUser {
   id: string;
   name: string;
   email: string;
}

export interface iUserLogin {
   email: string;
   password: string;
}

export interface iUserRegister {
   email: string;
   password: string;
   name: string;
   confirmationPassword: string;
}

export interface iUserContext {
   userLogin: (data: iUserLogin) => Promise<void>;
   userRegister: (data: iUserRegister) => Promise<void>;
   userLogout: () => void;
   user: iUser | null
}

export interface iProducts {
   id: number;
   name: string;
   category: string;
   price: number;
   img: string;
}

export interface iProductProps{
   product: iProducts  
}

export interface iProductsContext{
   products: iProducts[]
   searchProducts: iProducts[]
   setSearch: React.Dispatch<React.SetStateAction<string>>
}

export interface iCartProducts{
   id:number
   name:string
   img:string
}

export interface iCartProductProps{
   product:iCartProducts
}


export interface iCartProductId{
   id?:number
}

export interface iCartContext{
   modalOpem:boolean
   setModalOpem:React.Dispatch<React.SetStateAction<boolean>>
   removeAllCartProducts: () => void
   addProduct: (selectedProduct: iProducts) => void
   CartProducts: iCartProducts[]
   removeCartProduct: (productId: iCartProductId) => void
}

export type iUserId = string



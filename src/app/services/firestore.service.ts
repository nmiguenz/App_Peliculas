import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private db:AngularFirestore) { }

  async alta(objeto : any, nombreColeccion:string){
    try {
      return await this.db.collection(nombreColeccion).add(objeto);
    } catch (error) {
      console.log('Error al realizar alta a Firebase: ', error);
      return error;
    }
  }

  async baja(id:string, nombreColeccion:string){
    try {
      return await this.db.collection(nombreColeccion).doc(id).delete();
    } catch (error) {
      console.log('Error al realizar baja a Firebase: ', error);
      return error;
    }
  }

  async getCollection(nombreColeccion:string){
    try {
      return await this.db.collection(nombreColeccion).snapshotChanges();
    } catch (error) {
      console.log('Error al obtener los objetos de Firebase: ', error);
      return error;
    }
  }
}

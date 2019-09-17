import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('item');
    this.item = this.itemRef.valueChanges();
  }
  save(newName: string) {
    this.itemRef.set({ name: newName });
  }
  update(newSize: string) {
    this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }

  ngOnInit() {
    this.save("hola " + Date());
    this.update(Date());
  }

}

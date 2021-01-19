import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IngredientListItem } from './ingredient-list-item';
import { IngredientsGroup } from './ingredients-group';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {

mySubItems: IngredientListItem[] = [
    new IngredientListItem(111, 'Child 1'),
    new IngredientListItem(112, 'Child 2')
    ];

 mySubItems2: IngredientListItem[] = [
    new IngredientListItem(211, 'Child 3'),
    new IngredientListItem(212, 'Child 4')
    ];

    mySubItems3: IngredientListItem[] = [
    new IngredientListItem(311, 'Child 5'),
    new IngredientListItem(312, 'Child 6')
    ];

   myList: IngredientListItem[] = [
    new IngredientListItem(1, 'Item 1', this.mySubItems),
    new IngredientListItem(2, 'Item 2', this.mySubItems2),
    new IngredientListItem(3, 'Item 3')    
  ];

  mellemList: IngredientListItem[] = [
    new IngredientListItem(10, 'Item 4', this.mySubItems3),
    new IngredientListItem(11, 'Item 5'),
    new IngredientListItem(12, 'Item 6')
  ];

  tjeckListe: IngredientListItem[] = [
    new IngredientListItem(13, 'Item 7'),
    new IngredientListItem(14, 'Item ')    
  ];

  tjekDuSelvHarList: IngredientListItem[] = [
  ];

groups: IngredientsGroup[] = [
  new IngredientsGroup(501, 'Group 1', this.myList),
  new IngredientsGroup(502, 'Group 2', this.mellemList),
]

itemList_ids: string[] =[];

constructor(){
  this.groups.forEach(g =>{
    this.itemList_ids.push(g.id.toString());
    g.items.forEach(i => {
       this.itemList_ids.push(i.id.toString());
      i.children.forEach(c=> {

      })
    })
  });
}



  drop(event: CdkDragDrop<IngredientListItem[]>) {    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  dropGroup(event: CdkDragDrop<IngredientsGroup[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
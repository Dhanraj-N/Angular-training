import { Component, OnInit } from '@angular/core';
import {  dataForConcat, dataForCopyWithin, dataForEvery, dataForFill, dataForFilter, dataForFind, dataForFindIndex, dataForFlat, dataForFlatMap, dataForForeach, dataForIncludes, dataForIndexOf, dataForJoin, dataForKeys, dataForLastIndexOf, dataForMap, dataForPop, dataForPush, dataForReduce, dataForReduceRight, dataForReverse, dataForShift, dataForSlice, dataForSome, dataForSort, dataForSplice, dataForTostring, dataForUnshift } from './data';

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.css']
})
export class ArrayMethodsComponent implements OnInit {
  public concatData: any[] = dataForConcat;
  public concatResult: any[] = [];

  public copyWithinData: any[] = dataForCopyWithin;
  public copyWithinResult: any[] = [];

  public filterData: any[] = dataForFilter;
  public filterResult: any[] = [];

 public everyData:any[]=dataForEvery
 public everyResult: any = '';

 public findData:any[]=dataForFind
 public findResult: any [] = [];

 public findIndexData:any[]=dataForFindIndex
 public findIndexResult: any;

 public flatData:any[]=dataForFlat
 public flatResult: any;

 public flatMapData:any[]=dataForFlatMap
 public flatMapResult: any;

 public foreachData:any[]=dataForForeach
 public foreachResult: any;

 public includesData:any[]=dataForIncludes;
 public includesResult: any;

 public indexOfData:any[]=dataForIndexOf
 public indexOfResult: any;

 public joinData:any[]=dataForJoin
 public joinResult: any;

 public keysData:any[]=dataForKeys
 public keysResult: any;

 public lastIndexOfData:any[]=dataForLastIndexOf
 public lastIndexOfResult: any;

 public mapData:any[]=dataForMap
 public mapResult: any[]=[];

 public popData:any[]=dataForPop
 public popResult: any[]=[];

 public pushData:any[]=dataForPush
 public pushResult: any;

 public reduceData:any[]=dataForReduce
 public reduceResult: any;

 public reduceRightData:any[]=dataForReduceRight
 public reduceRightResult: any;

 public reverseData:any[]=dataForReverse
 public reverseResult: any;

 public shiftData:any[]=dataForShift
 public shiftResult: any;

 public sliceData:any[]=dataForSlice
 public sliceResult: any;

 public someData:any[]=dataForSome
 public someResult: any;

 public sortData:any[]=dataForSort
 public sortResult: any;

 public spliceData:any[]=dataForSplice
 public spliceResult: any []=[];

 public tostringData:any[]=dataForTostring
 public tostringResult: any;

 public unshiftData:any[]=dataForUnshift
 public unshiftResult: any;

 public fillData:any[]=dataForFill
 public fillResult: any;
 foreachD:any[]=[]
  ngOnInit(): void {
    this.onConcat()
    this.onCopyWithin()
    this.onEvery()
    this.onFill() 
    this.onFilter();
    this.onFind()
    this.onFindIndex()
    this.onFlat()
   this.onFlatMap()
   this.onForeach()
   this.onIncludes()
   this.onIndexOf()
   this.onJoin()
   this.onKeys()
   this.onlastIndexOf()
   this.onMap()
   this.onPop()
   this.onPush()
   this.onReduce()
   this.onReduceRight()
   this.onReverse()
   this.onShift ()
   this.onSlice()
   this.onSome()
   this.onSort()
   this.onSplice()
   this.onTostring()
   this.onUnshift()
 
     
  }

  onConcat(): void {
    this.concatResult = this.concatData.concat(this.filterData);
  }

  onCopyWithin():void{
  this.copyWithinResult=this.copyWithinData.copyWithin(2,2)
  }

  onFilter(): void {
    // Age less than 15
    this.filterResult = this.filterData.filter((d: any) => d.age < 15);
  }

  onEvery():void {
     // Age greater than 13
  this.everyResult=this.everyData.every((d:any)=>{d.age > 13})
  }

  onFind():void{
     // Age greater than 14
    this.findResult=this.findData.find((d:any)=>{ return d.age > 14})
  }

 onFindIndex():void{
  this.findIndexResult=this.findIndexData.findIndex((d:any)=>{
      return d.name === "abc2"
  })
 }

 onFlat():void {
 this.flatResult=this.flatData.flat()
 }

onFlatMap ():void{
 this.flatMapResult=this.flatMapData.flat()
}

onForeach():void{
this.foreachData.forEach((d:any)=>{
 d.age=d.age+10
   });
   console.log("foreach result "+this.foreachResult);
   
}

onIncludes():void{
  console.log(this.includesData)
  this.includesResult=this.includesData.includes({ id: 1, name: 'abc1' , age: 11 })
}

onIndexOf():void{
 this.indexOfResult=this.indexOfData.indexOf({ id: 1, name: 'abc1' , age: 11})
}

//
onJoin ():void{
  console.log("join data "+this.joinData.join());
  
this.joinResult=this.joinData.join()
}


onKeys():void{
this.keysResult=this.keysData.keys()
 for (const key of this.keysData){
  console.log(key)
 }
}

onlastIndexOf():void{
 this.lastIndexOfResult = this.lastIndexOfData.lastIndexOf((d: any) => d.id == 5);
}

onMap():void{
this.mapResult=this.mapData.map((res)=>{
 return res.age > 12
})
}

onPop():void{
 this.popResult=this.popData.pop()
}

onPush():void{
  this.pushResult=this.pushData.push({ id: 8, name: 'abc8' , age: 18 })
}

onReduce():void{
this.reduceResult=this.reduceData.reduce((res1, r2)=>{
return res1-r2
})
}

onReduceRight():void{
 this.reduceRightResult=this.reduceRightData.reduceRight((d1, d2)=>{
  return d1-d2
 })
}

onReverse():void{
  this.reverseResult=this.filterData.reverse()
}

onShift ():void{
  this.shiftResult=this.shiftData.shift()
}

onSlice():void{
  this.sliceResult=this.sliceData.slice(1,3)
}

onSome():void{
 this.someResult=this.someData.some((data:any)=>{
  return data.age >14
 })
}

onSort():void{
 this.sortResult=this.sortData.sort()
}

onSplice():void{
  this.spliceResult=this.spliceData.splice(2, 0, { id: 100, name: 'abc100' , age: 50 })
}

onTostring():void{
  this.tostringResult=this.tostringData.toString();
}

onUnshift():void{
  this.unshiftResult=this.unshiftData.unshift({ id: 100, name: 'abc100' , age: 50 });
}

onFill():void{
  this.fillResult=this.fillData.fill(  { id: 4, name: 'abc4' , age: 14 } ,2 ,4);
}

}

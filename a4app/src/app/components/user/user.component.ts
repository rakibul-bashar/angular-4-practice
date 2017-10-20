import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';//idefine manually

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string="ra";
  age: number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post;
  isedit:boolean=false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name="rajib";
    this.age=20;
    this.email="rakibul@gmail.com";
    this.address={
    Division:'Dhaka',
    HomeTown:'manikgonj'
    }
    this.hobbies=["Boat-journey","reading","playing batminton"];
    this.hello="Hello";
    this.dataService.getposts().subscribe((posts)=> {
        //console.log(posts)
        this.posts=posts;

    })


  }
  onClick(){
      console.log("hello");
      this.name="rakib vai";
      //this.hobbies.push("rakib vai 123");
     // this.hobbies.unshift("rakib vai 123");

  }
addhobby(hobby){
     console.log(hobby);
     this.hobbies.unshift(hobby);
     return false;
}
deletehobby(hobby){
     for(let i=0;i<this.hobbies.length;i++){
         if(this.hobbies[i]==hobby){
             this.hobbies.splice(i,1);
         }
     }
}
edituser(){
    this.isedit=!this.isedit
    //console.log(this.isedit)
}

}
interface Address{
    Division:string,
    HomeTown:string
}
//Before defining the interface check fast which type of porperty in the object then included it.
//Here we use this site https://jsonplaceholder.typicode.com/posts' then get the value of id,title,body,userid on that site
interface Post{
    id:number,
    title:string,
    body:string,
    userId:number
}

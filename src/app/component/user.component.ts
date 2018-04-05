import { Component } from '@angular/core';
import { PostsService }  from '../services/posts.service'; 
@Component({
	moduleId: module.id, //to make work of templateurl
    selector: 'user',
    templateUrl:'user.component.html',  //path of template url
	providers: [PostsService]
})
export class UserComponent  { 
name : string; 
email : string;
address:address;
hobbies : string[];
showhobbies:boolean;
posts:Post[]; //array of type posts to store json service data


constructor(private postsService: PostsService){ //to inject post data 
 this.name="singh";
 this.email='rajnishmca20@gmail.com'; 
 this.address={
	street:'dalmianagar',
	city:'dehri'
  }
  this.hobbies=['cricket','chess','badminton']
  this.showhobbies=false;
this.postsService.getPosts().subscribe(posts => {
  this.posts=posts;
  });
}



toggelhobbies(){
	if(this.showhobbies==true){
 this.showhobbies=false;
	}
	else{
	 this.showhobbies=true;
	}
}
addHobby(hoby){
	this.hobbies.push(hoby);
}
deleteHobby(i){
	this.hobbies.splice(i,1)
}

}
interface address{
street:string;
city:string;
}
interface Post{
	id: number;
	title: string;
	body: string;
}
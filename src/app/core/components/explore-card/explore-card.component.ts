import {Component, Input, NgModule, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomI } from '../../Model/room.interface';
import { ChatService } from '../../services/chat-service/chat.service';
import { ImageService } from '../../services/image.service';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.css']
})
export class ExploreCardComponent implements OnInit {

  @Input() name! : string ;
  @Input() description! : string ;
  @Input() room! : RoomI ;
  @Input() image! : string ;
  @Input() owner! : boolean ;
  selectedFile!: ImageSnippet;
  
  constructor(private router:Router,private chatService:ChatService,private imageService: ImageService) { }

  ngOnInit(): void {
    console.log(this.room) }

  joinRoom(){
      this.chatService.setJoinedRoom(this.room)
      this.router.navigate(['/room']);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadRoomImage(this.selectedFile.file,this.room.id).subscribe(
        (res) => {

          console.log("AAAAAAAAAA");
          //res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
          
          window.location.reload()
          
          //this.imageService.getImage(res.filename)

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }

}

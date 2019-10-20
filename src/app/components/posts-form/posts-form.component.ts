import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  constructor(private postService: PostService) {}

  ngOnInit() {}

  addPost(title, body) {
    if (!title || !body) {
      alert('Pleaase add post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    console.log(123);
  }
}

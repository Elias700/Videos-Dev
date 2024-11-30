
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Video } from '../../interface/video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CommonModule, FormsModule]
})
export class mainComponent {
  

  videos: Video[] = [
    { title: 'Rick Astley - Never Gonna Give You Up', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg', views: '1.200.000.000' },
    { title: 'Mark Ronson - Uptown Funk', url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg', views: '4.000.000.000' },
    { title: 'Smash Mouth - All Star', url: 'https://www.youtube.com/watch?v=L_jWHffIx5E', thumbnail: 'https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg', views: '300.000.000' },
    { title: 'Luis Fonsi - Despacito', url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk', thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg', views: '8.000.000.000' },
    { title: 'Alan Walker - Faded', url: 'https://www.youtube.com/watch?v=60ItHLz5WEA', thumbnail: 'https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg', views: '3.000.000.000' },
    { title: 'Wiz Khalifa - See You Again', url: 'https://www.youtube.com/watch?v=RgKAFK5djSk', thumbnail: 'https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg', views: '5.000.000.000' },
    { title: 'Maroon 5 - Sugar', url: 'https://www.youtube.com/watch?v=09R8_2nJtjg', thumbnail: 'https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg', views: '3.800.000.000' },
    { title: 'Katy Perry - Roar', url: 'https://www.youtube.com/watch?v=CevxZvSJLk8', thumbnail: 'https://i.ytimg.com/vi/CevxZvSJLk8/hqdefault.jpg', views: '3.700.000.000' },
    { title: 'Pharrell Williams - Happy', url: 'https://www.youtube.com/watch?v=lp-EO5I60KA', thumbnail: 'https://i.ytimg.com/vi/lp-EO5I60KA/hqdefault.jpg', views: '3.600.000.000' },
    { title: 'PSY - Gangnam Style', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg', views: '4.700.000.000' }
  ];

  
  searchQuery: string = '';

  get filteredVideos(): Video[] {
    const query = this.searchQuery.toLowerCase();
    return this.videos.filter(video =>
      video.title.toLowerCase().includes(query)
    );
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
  }
  

  lupaLogo = 'lupa.png'

  like = 'like.png'
  deslike = 'deslike.png'
  estrela = 'estrela.png'

}







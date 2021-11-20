import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
@Injectable()
export class AppService {
  async getFotoAlimento(alimento: string): Promise<string> {
    const response = await fetch('https://api.unsplash.com/search/photos?page=1&query=banana&client_id=-HZSVNde3TaH4iXUtrcOZKLTvwyKb7O8gTLtQOEbUIA&per_page=1&orientation=squarish');
    const data = await response.json();
    return data.results[0].urls.regular;
  }
}

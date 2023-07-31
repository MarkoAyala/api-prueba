import { Controller, Post,Get, Param} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios/dist';

@Controller('/images')
export class CatsApiController {
    constructor(private http :HttpService){}

    @Get()
    async getApi(){
        const request = this.http.get('https://api.thecatapi.com/v1/images/search?limit=10&api_key=f221c99b-304d-4404-b111-cbd3ddccf31a');
        const info = await lastValueFrom(request);
        return info.data;
    }

    @Get('/favorites')
    async getFavorites(){
        const request = this.http.get('https://api.thecatapi.com/v1/favourites?limit=20&sub_id=user-123&order=DESC',{
            headers:{
                "content-type":"application/json",
                'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a'
            }
        })
        const info = await lastValueFrom(request);
        return info.data;
    }

    @Post('/:id')
    async addFavorite(@Param('id') id : string){
        const rawBody = JSON.stringify({
            "image_id":id,
            "sub_id":"user-123"
        })
        const request = this.http.post('https://api.thecatapi.com/v1/favourites',rawBody, 
        {
            method:'POST',
            headers:{
                "content-type":"application/json",
                'x-api-key' : 'f221c99b-304d-4404-b111-cbd3ddccf31a' 
            }
        })
        const info = await lastValueFrom(request);
        return info.data
    }
}

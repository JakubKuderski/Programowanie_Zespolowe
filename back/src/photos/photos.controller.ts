import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { PhotosService } from './photos.service'
import { CreatePhotoDto } from './dto/create-photo.dto'

@Controller('photos')
export class PhotosController {
	constructor(private readonly photosService: PhotosService) {}

	@Post()
	create(@Body() createPhotoDto: CreatePhotoDto) {
		return this.photosService.create(createPhotoDto)
	}

	@Get()
	findAll() {
		return this.photosService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.photosService.findOne(id)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.photosService.remove(id)
	}
}

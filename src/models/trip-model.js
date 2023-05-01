function EventTrip(title, tripDescription, arrivalDate, returnDate, key,
                   favorite, photoGroup) {
    this.title = title ?? '';
    this.tripDescription = tripDescription ?? '';
    // add any additional properties
    this.arrivalDate = arrivalDate ?? '';
    this.returnDate = returnDate ?? '';
    this.key = key ?? '';
    this.favorite = favorite ?? false;
    this.photoGroup = photoGroup ?? [];
    this.save = function(newObj){
        this.title = newObj.title;
        this.photo = newObj.photo;
    }
}
EventTrip.type = "EventTrip";

function PhotoGroup(title, photo,photoFilePath, photoCaption) {  //this will auto-label the title & photosArray  "Chapters"
    this.title = title ?? '';
    this.photo = photo ?? [];
    this.photoFilePath = photoFilePath ?? '';
    this.photoCaption = photoCaption ?? '';
    this.save = function(newObj){
        this.photoFilePath = newObj.photoFilePath;
        this.photoCaption = newObj.photoCaption;
    }
}

function Photo(photoFilePath, photoCaption){   //this will auto-label the photos & photoCaptions "topics"
    this.photoFilePath = photoFilePath ?? '';
    this.photoCaption = photoCaption ?? '';
    this.save = function(newObj){
        this.photoFilePath = newObj.photoFilePath;
        this.photoCaption = newObj.photoCaption;
    }
}

export {EventTrip, PhotoGroup, Photo};


function EventTrip(title, tripDescription, arrivalDate, returnDate, travelCountry, key,
                   favorite, photoGroup) {
    this.title = title ?? '';
    this.tripDescription = tripDescription ?? '';
    // add any additional properties
    this.arrivalDate = arrivalDate ?? '';
    this.returnDate = returnDate ?? '';
    this.travelCountry = travelCountry ?? '';
    this.key = key ?? '';
    this.favorite = favorite ?? false;
    this.photoGroup = photoGroup ?? [];
    this.save = function(newObj){
        this.groupTitle = newObj.groupTitle;
        this.photoArray = newObj.photoArray;
    }
}
EventTrip.type = "EventTrip";

function PhotoGroup(groupTitle, photoArray,photoFilePath, photoCaption) {  //this will auto-label the title & photosArray  "Chapters"
    this.groupTitle = groupTitle ?? '';
    this.photoArray = photoArray ?? [];
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

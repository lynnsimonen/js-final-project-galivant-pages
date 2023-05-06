function EventTrip(title, tripDescription, arrivalDate, returnDate, key,
                   favorite, arrayOfPhotoGroups, photoGroup) {
    this.title = title ?? '';
    this.tripDescription = tripDescription ?? '';
    // add any additional properties
    this.arrivalDate = arrivalDate ?? '';
    this.returnDate = returnDate ?? '';
    this.key = key ?? '';
    this.favorite = favorite ?? false;
    this.arrayOfPhotoGroups = arrayOfPhotoGroups ?? [];
    this.photoGroup = photoGroup ?? [];
    this.save = function(newObj){
        this.photoGroup = newObj.photoGroup;
    }
}
EventTrip.type = "EventTrip";

function ArrayOfPhotoGroups (photoGroup, title, arrayOfPhotos){
    this.photoGroup = photoGroup ?? [];
    this.title = title ?? '';
    this.arrayOfPhotos = arrayOfPhotos ?? [];
    this.save = function(newObj){
        this.title = newObj.title;
        this.arrayOfPhotos = newObj.arrayOfPhotos;
    }
}
function PhotoGroup(title, arrayOfPhotos,photoFilePath, photoCaption) {  //this will auto-label the title & photosArray  "Chapters"
    this.title = title ?? '';
    this.arrayOfPhotos = arrayOfPhotos ?? [];
    this.photoFilePath = photoFilePath ?? '';
    this.photoCaption = photoCaption ?? '';
    this.save = function(newObj){
        this.photoFilePath = newObj.photoFilePath;
        this.photoCaption = newObj.photoCaption;
    }
}

function ArrayOfPhotos(photo){   //this will auto-label the photos & photoCaptions "topics"
    this.photo = photo ?? [];
    this.save = function(newObj){
        this.photo = newObj.photo;
    }
}
function Photo (photoFilePath, photoCaption) {
    this.photoFilePath = photoFilePath ?? '';
    this.photoCaption = photoCaption ?? '';
    this.save = function(newObj){
        this.photoCaption = newObj.photoCaption;
        this.photoFilePath = newObj.photoFilePath;
    }
}

export {EventTrip, ArrayOfPhotoGroups, PhotoGroup, ArrayOfPhotos, Photo};


//---------------------------------------------------------

// function EventTrip(title, tripDescription, arrivalDate, returnDate, key,
//                    favorite, photoGroup) {
//     this.title = title ?? '';
//     this.tripDescription = tripDescription ?? '';
//     // add any additional properties
//     this.arrivalDate = arrivalDate ?? '';
//     this.returnDate = returnDate ?? '';
//     this.key = key ?? '';
//     this.favorite = favorite ?? false;
//     this.photoGroup = photoGroup ?? [];
//     this.save = function(newObj){
//         this.title = newObj.title;
//         this.photo = newObj.photo;
//     }
// }
// EventTrip.type = "EventTrip";
//
// function PhotoGroup(title, photo,photoFilePath, photoCaption) {  //this will auto-label the title & photosArray  "Chapters"
//     this.title = title ?? '';
//     this.photo = photo ?? [];
//     this.photoFilePath = photoFilePath ?? '';
//     this.photoCaption = photoCaption ?? '';
//     this.save = function(newObj){
//         this.photoFilePath = newObj.photoFilePath;
//         this.photoCaption = newObj.photoCaption;
//     }
// }
//
// function Photo(photoFilePath, photoCaption){   //this will auto-label the photos & photoCaptions "topics"
//     this.photoFilePath = photoFilePath ?? '';
//     this.photoCaption = photoCaption ?? '';
//     this.save = function(newObj){
//         this.photoFilePath = newObj.photoFilePath;
//         this.photoCaption = newObj.photoCaption;
//     }
// }
//
// export {EventTrip, PhotoGroup, Photo};

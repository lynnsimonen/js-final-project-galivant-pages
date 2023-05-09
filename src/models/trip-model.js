

//TODO: Make sure all models and constructors are created properly and relate directly with data in TripItemList.vue
// photoGroup shouldn't be listed twice and is missing the title before arrayOfPhotos 🥺
//
// function EventTrip(title, tripDescription, arrivalDate, returnDate, key,
//                    favorite, photoGroup, groupTitle, photosArray) {
//     this.title = title ?? '';
//     this.tripDescription = tripDescription ?? '';
//     // add any additional properties
//     this.arrivalDate = arrivalDate ?? '';
//     this.returnDate = returnDate ?? '';
//     this.key = key ?? '';
//     this.favorite = favorite ?? false;
//     this.photoGroup = photoGroup ?? [];
//     this.photosArray = photosArray ?? [];
//     this.groupTitle = title ?? '';
//     this.save = function(newObj){
//         this.photosArray = newObj.photosArray;
//         this.groupTitle = newObj.title;
//     }
// }
// EventTrip.type = "EventTrip";
//
// function PhotoGroup (groupTitle, photosArray, photoCaption, photoFilePath){
//     this.groupTitle = groupTitle ?? '';
//     this.photosArray = photosArray ?? [];
//     this.photoFilePath = photoFilePath ?? '';
//     this.photoCaption = photoCaption ?? '';
//     this.save = function(newObj){
//         this.photoCaption = newObj.photoCaption;
//         this.photoFilePath = newObj.photoFilePath;
//     }
// }
//
// function PhotosArray(photoCaption, photoFilePath){   //this will auto-label the photos & photoCaptions "topics"
//     this.photoFilePath = photoFilePath ?? '';
//     this.photoCaption = photoCaption ?? '';
//     this.save = function(newObj){
//         this.photoCaption = newObj.photoCaption;
//         this.photoFilePath = newObj.photoFilePath;
//     }
// }
//
// export {EventTrip, PhotosArray, PhotoGroupArray};
//

//---------------------------------------------------------

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

function EventTrip(title, tripDescription, arrivalDate, returnDate,
                   favorite) {
    this.id = '';  //can only be provided by firebase
    this.title = title ?? 'New Project Title';
    this.tripDescription = tripDescription ?? 'Trip Description';
    // add any additional properties
    this.arrivalDate = arrivalDate ?? '';
    this.returnDate = returnDate ?? '';
    this.favorite = favorite ?? false;


    //other firebase internals
    this._path = '';

    this.toString = function () {
        return this.title;
    }

    //used to create PLAIN object to store in Firebase
    this.toFirebase = function () {
        return {
            title: this.title,
            tripDescription: this.tripDescription,
            arrivalDate: this.arrivalDate.toDate(),
            returnDate: this.returnDate.toDate(),
            favorite: this.favorite,
        }
    }
}

EventTrip.type = "EventTrip";

//STATIC properties/method for EventTrip
EventTrip.collectionName = 'trips';

// used to convert PLAIN object from Firebase to custom model
// https://firebase.google.com/docs/firestore/query-data/get-data#custom_objects
EventTrip.fromFirestore = function (snapshot, options) {
    const data = snapshot.data(options);
    const trip = new EventTrip(data.title, data.tripDescription, data.arrivalDate, data.returnDate, data.favorite);

    //set some things for firebase usage
    trip.id = snapshot.id;
    trip._path = snapshot.ref.path;

    return trip;
}

export default EventTrip;

//
// function PhotoGroup(title, photo, photoFilePath, photoCaption) {  //this will auto-label the title & photosArray  "Chapters"
//     this.title = title ?? '';
//     this.photo = photo ?? [];
//     this.photoFilePath = photoFilePath ?? '';
//     this.photoCaption = photoCaption ?? '';
//     this.save = function (newObj) {
//         this.photoFilePath = newObj.photoFilePath;
//         this.photoCaption = newObj.photoCaption;
//     }
// }
//
// function Photo(photoFilePath, photoCaption) {   //this will auto-label the photos & photoCaptions "topics"
//     this.photoFilePath = photoFilePath ?? '';
//     this.photoCaption = photoCaption ?? '';
//     this.save = function (newObj) {
//         this.photoFilePath = newObj.photoFilePath;
//         this.photoCaption = newObj.photoCaption;
//     }
// }
//
// export {EventTrip, PhotoGroup, Photo};
//

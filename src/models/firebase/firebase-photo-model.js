function Photo(photoFilePath, photoCaption) {
    //this will auto-label the photos & photoCaptions "topics"
    //object data
    this.id = ''; //can only be provided by firebase
    this.photoFilePath = photoFilePath ?? '';
    this.photoCaption = photoCaption ?? '';

    //other firebase internals
    this._path = '';

// used to create PLAIN object to store in Firebase
    this.toFirestore = function () {
        return {
            photoCaption: this.photoCaption,
            photoFilePath: this.photoFilePath,
        }
    }
}

// STATIC properties/methods
Photo.collectionName = 'photos';

// used to convert PLAIN object from Firebase to custom model
// https://firebase.google.com/docs/firestore/query-data/get-data#custom_objects
Photo.fromFirestore = function (snapshot, options) {
    const data = snapshot.data(options);
    const photo = new Photo(data.photoCaption, data.photoFilePath);

    // set some things for firebase usage
    photo.id = snapshot.id;
    photo._path = snapshot.ref.path;

    return photo;

}
export default Photo;


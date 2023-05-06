function PhotoGroup(photoGroupTitle, photoGroupDescription) {
    //object data
    this.id = ''; // can only be provided by firebase
    this.photoGroupTitle = photoGroupTitle ?? '';
    this.photoGroupDescription = photoGroupDescription ?? '';

    //other firebase internals
    this._path = '';

    //used to create PLAIN object to store in Firebase
    this.toFirestore = function () {
        return {
            photoGroupTitle: this.photoGroupTitle,
            photoGroupDescription: this.photoGroupDescription,
        }
    }
}

//STATIC properties/methods
PhotoGroup.collectionName = 'photogroups';

// used to convert PLAIN object from Firebase to custom model
// https://firebase.google.com/docs/firestore/query-data/get-data#custom_objects
PhotoGroup.fromFirestore = function(snapshot, options) {
    const data = snapshot.data(options);
    const photogroup = new PhotoGroup(data.photoGroupTitle, data.photoGroupDescription);

    //set some things for firebase usage
    photogroup.id = snapshot.id;
    photogroup._path = snapshot.ref.path;

    return photogroup;
}

export default PhotoGroup;
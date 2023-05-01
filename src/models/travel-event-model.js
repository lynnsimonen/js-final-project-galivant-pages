export default function TravelEvent(travelEvent) {

    const STATUSES =
        {FAVORITE: 'favorite', REGULAR:'regular'}

    // set the default status
    travelEvent.status = STATUSES.REGULAR;

    // methods
    travelEvent.isFavorite = function () {
        if (this.status === STATUSES.FAVORITE) {
            this.status === STATUSES.REGULAR;
        }
        else this.status === STATUSES.FAVORITE;
    }

    travelEvent.regularStar = function () {
        this.status = STATUSES.REGULAR;
    }

    travelEvent.favoriteStar = function () {
        this.status = STATUSES.FAVORITE;
    }

    return travelEvent;
}
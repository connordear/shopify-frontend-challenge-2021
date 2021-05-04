import { IRating } from './IRating';

export class Rating implements IRating {
    Source = '';
    Value = '';

    constructor(ratingData: IRating) {
        Object.assign(this, ratingData);
    }
}

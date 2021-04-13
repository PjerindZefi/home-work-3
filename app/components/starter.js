import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class StarterComponent extends Component {
    @tracked ArrayFriends = [];
    @tracked PresentFriend;
    @tracked PresentSpendingEvent;
    @tracked PresentPaidBy;
    @tracked PresentExpense;

    @tracked
    rows = [];

    addToArrFriends() {

        this.ArrayFriends.pushObject(this.PresentFriend);
        this.PresentFriend = "";
    }

    changeFriend(event) {
        console.log(event);
        this.PresentFriend = event.target.value;
    }

    changeSpendingEvent(event) {
        console.log(event);
        this.PresentSpendingEvent = event.target.value;
    }
    removeRowFromEventsTable(index) {
        this.rows.removeAt(index);
    }
    changePresentPaidBy(event) {
        console.log(event);
        this.PresentPaidBy = event.target.value;
    }

    changePresentExpense(event) {
        console.log(event);
        this.PresentExpense = event.target.value;
    }
    addRowtoEventsTable() {

        var mRow = {};
        mRow.spendingEvent = this.PresentSpendingEvent;
        mRow.paidBy = this.PresentPaidBy;
        mRow.expense = parseFloat(this.PresentExpense);

        this.rows.pushObject(mRow);

        this.PresentSpendingEvent = "";
        this.PresentPaidBy = "";
        this.PresentExpense = "";
    }

    get FriendsAddOn() {
        return (this.ArrayFriends.length) < 10;
    }

    get spendingEventsAddOn() {
        return (this.rows.length < 10) && (this.ArrayFriends.length > 0);
    }

    get spendingEventMoreThanTen() {
        return (this.rows.length == 10) && (this.rows.length != 0);
    }

    get HasNoFriend() {
        return this.ArrayFriends.length == 0;
    }

    get numOfFriends() {
        return this.ArrayFriends.length;
    }

}
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const inputEvent = document.createEvent("HTMLEvents");
inputEvent.initEvent("input", false, true);

module('Integration | Component | add-friends', function(hooks) {
    setupRenderingTest(hooks);

    test('friends list renders as expected', async function(assert) {
        this.set('ArrayFriends', []);
        this.set('currentFriend', "");
        this.set('changeFriend', function(event) { this.set('currentFriend', event.target.value) });
        this.set('addToArrFriend', function() {
            this.ArrayFriends.pushObject(this.currentFriend);
            this.set('currentFriend', "");
        });
        this.set('FriendsCanBeAdded', true);

        await render(hbs `<AddFriends 
      @ArrayFriends={{this.ArrayFriends}}     
      @currentFriend={{this.currentFriend}} 
      @changeFriend={{action changeFriend}}
      @addToArrFriends={{action addToArrFriends}} 
      @FriendsCanBeAdded={{this.FriendsCanBeAdded}}
      />
    `);
        debugger;
        const friendInput = this.element.querySelector('[data-test-friend-input]');
        friendInput.value = 'Person A';
        friendInput.dispatchEvent(inputEvent);
        this.element.querySelector('[data-test-add-btn]').click();
        const list = this.element.querySelector('[data-test-friends-list]');
        const listItems = list.getElementsByTagName('li');
        assert.equal(listItems.length, 1, 'one friend added to list');
        assert.ok(listItems[0].textContent.includes('Person A'));
    });

});
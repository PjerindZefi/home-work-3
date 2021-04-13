import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | number-0f-friends', function(hooks) {
    setupRenderingTest(hooks);

    // TODO: Replace this with your real tests.
    test('it renders', async function(assert) {
        this.set('inputValue', '1234');

        await render(hbs `{{number-0f-friends inputValue}}`);

        assert.equal(this.element.textContent.trim(), '1234');
    });
});
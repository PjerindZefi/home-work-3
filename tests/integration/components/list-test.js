import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | result-List', function(hooks) {
    setupRenderingTest(hooks);

    test('The list renders correctly.', async function(assert) {
        this.set('List', [{ currOwedMoney: 0, name: "Mark", owedMoney: 50, transaction: [{ credit: 50, id: "John" }] }]);

        await render(hbs `<List 
    @List={{this.List}}
    />`);
        debugger;

        assert.equal(this.element.querySelector('[data-test-font-color]').getAttribute('class'), 'green', "Font green");


    });
});
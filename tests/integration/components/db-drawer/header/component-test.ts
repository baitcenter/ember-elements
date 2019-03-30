import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | db-drawer/header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{db-drawer/header}}`);
    var element:any=this.element;

    assert.equal(element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#db-drawer/header}}
        template block text
      {{/db-drawer/header}}
    `);

    assert.equal(element.textContent.trim(), 'template block text');
  });
});

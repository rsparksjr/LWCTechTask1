import {createElement} from 'lwc';
import ParentComponent from 'c/parentComponent';

describe('c-parent-component suite', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    })
    beforeEach(()=> {
        const element = createElement('c-parent-component', {
            is:ParentComponent
        });
        document.body.appendChild(element);
    })
    it('Test clicking Add button', () => {
        const BUTTONS_EXPECTED = [
            'Test 1'
        ];
        const element = document.querySelector('c-parent-component');
        const inputElement = element.shadowRoot.querySelector('lightning-input');

            const button1 = element.shadowRoot.querySelector('lightning-button');
            inputElement.value = 'Test 1';
            button1.click();
            return Promise.resolve().then(() => {
            const buttonNames = Array.from(element.shadowRoot.querySelectorAll('c-child-component')).map((childComponent) => childComponent.inputitem);
            expect(buttonNames.length).toBe(BUTTONS_EXPECTED.length);
            expect(buttonNames).toEqual(BUTTONS_EXPECTED);
            //expect(element.list).not.toBe(null);
            //expect(element.list[0]).toBe('Test 1');
        });
    

    } );

});